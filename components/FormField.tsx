import cn from 'clsx';
import type { ChangeEvent, HTMLProps, ReactElement } from 'react';
import React, { createElement, forwardRef, useEffect, useState } from 'react';

import WrapWhen from '@/components/WrapWhen';
import Icon from '@/components/Icon';

// eslint-disable-next-line @typescript-eslint/no-empty—-function
const noop = (e: Event | FocusEvent | ChangeEvent<HTMLInputElement>) => {};

interface FormFieldProps extends HTMLProps<HTMLInputElement> {
  // Appears as a placeholder and adapts to a label while input is active.
  label?: string;
  // Appears as a placeholder while input is active and disappears once input has a value.
  placeholder?: string;
  // Appears inline after input value while input is active. E.g., 10*px*, 20*ft*, etc.
  unit?: string;
  // Appears along the bottom of input immediately. Empty strings don't appear.
  hint?: string;
  // Appears inline after label and gets hidden while input is active.
  excess?: string;
  // Acts as a default value.
  value?: any;
  // Creates a cancel button that will reset input.
  canCancel?: boolean;
  // Creates a clipboard button that copies the input value when clicked.
  canCopy?: boolean;
  // Creates a button that reveals password in the input value when clicked.
  canReveal?: boolean;
  // Creates an optional message inline after the label.
  isOptional?: boolean;
  // Adds a class to make input corners partially rounded.
  isRadius?: boolean;
  // Adds a class to make input corners fully rounded.
  isRound?: boolean;
  // Adds a class to make input width 50%.
  isHalf?: boolean;
  // Adds a class to make input value monospace font.
  isCode?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancel?: () => void;
  onFocus?: typeof noop;
  onBlur?: typeof noop;
  control?: ReactElement;
}

type FormFieldState = {
  value: string;
  empty: boolean;
  focus: boolean;
  reveal: boolean;
};

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      className,
      type = 'text',
      label,
      placeholder,
      unit,
      hint,
      excess,
      value = '',
      canCancel,
      canCopy,
      canReveal,
      isOptional,
      isRadius = true,
      isRound,
      isHalf,
      isCode,
      onChange = noop,
      onFocus = noop,
      onBlur = noop,
      onKeyDown,
      onCancel,
      control,
      ...rest
    },
    ref
  ) => {
    const [state, setState] = useState<FormFieldState>(() => {
      return {
        value,
        focus: false,
        empty: value === '',
        reveal: false,
      };
    });

    useEffect(() => {
      if (value !== state.value) {
        setState((oldState) => ({
          ...oldState,
          value,
          empty: value === '',
        }));
      }
    }, [value]);

    const handleChange = (event: any) => {
      setState((oldState) => ({
        ...oldState,
        value: event.target.value,
        empty: event.target.value === '',
      }));
      if (onChange) {
        onChange(event);
      }
    };

    // TODO(dk) wip number input feature
    // const handleChange = (event) => {
    //   let newValue = event.target.value;
    //   if (type === 'number') {
    //     newValue = newValue.replace(/[^\d.]\g, '')
    //   }
    //   setState((oldState) => ({
    //     ...oldState,
    //     value: newValue,
    //     empty: newValue === '',
    //   }))
    //   if (onChange) {
    //     onChange(event)
    //   }
    // }

    const handleFocus = (event: any) => {
      setState((oldState) => ({
        ...oldState,
        focus: true,
      }));
      if (onFocus) {
        onFocus(event);
      }
    };

    const handleBlur = (event: any) => {
      setState((oldState) => ({
        ...oldState,
        focus: false,
      }));
      if (onBlur) {
        onBlur(event);
      }
    };

    // TODO(dk) wip number input feature
    // const handleKeyDown = (event) => {
    //   if (event.code === 'ArrowUp') {
    //     event.preventDefault()
    //     setState((oldState) => ({
    //       ...oldState
    //       value: (parseInt(state.value) + 1).toString(),
    //     }))
    //   } else if (event.code === 'ArrowDown') {
    //     setState((oldState) => ({
    //       ...oldState,
    //       value: (parseInt(state.value) - 1).toString(),
    //     }))
    //   }
    // }

    // TODO(dk) temp hack to prevent breaking layout until number input feature is done
    const handleKeyDown = (event: any) => {
      if (type === 'number') {
        if (['e', 'E', '+', '-'].includes(event.key)) {
          event.preventDefault();
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    const handleReveal = () => {
      setState((oldState) => ({
        ...oldState,
        reveal: !state.reveal,
      }));
    };

    const handleCancel = (event: any) => {
      setState((oldState) => ({
        ...oldState,
        value: '',
        empty: true,
      }));
      if (onChange) {
        onChange(event);
      }
      if (onCancel) {
        onCancel();
      }
    };

    const adapt = state.focus || !state.empty;
    const action = canCancel || canCopy || (canReveal && type === 'password');

    // TODO(dk) wip number input feature
    let inputType;
    if (type === 'password' && state.reveal) {
      inputType = 'text';
    } else if (type === 'number') {
      inputType = 'text';
    } else {
      inputType = type;
    }

    const Label = () => {
      return (
        <>
          {label}
          {isOptional && !adapt && ' (optional)'}
          {excess && !adapt && excess}
        </>
      );
    };

    const input =
      type === 'textarea' ? (
        // @ts-expect-error
        <textarea
          {...rest}
          className="aff-area"
          value={state.value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      ) : (
        <label className="aff-field-wrapper" title={label}>
          {control ||
            createElement('input', {
              ...rest,
              className: 'aff-text',
              type: type === 'password' && state.reveal ? 'text' : type,
              value: state.value,
              onChange: handleChange,
              onBlur: handleBlur,
              onFocus: handleFocus,
              size: unit ? 1 : undefined,
              onKeyDown: handleKeyDown,
              ref,
            })}
        </label>
      );

    return (
      <div
        className={cn('aff', {
          adapt,
          action,
          labeless: !label,
          empty: state.empty,
          one: state.value?.length === 1,
          focus: state.focus,
          radius: isRadius,
          round: isRound,
          half: isHalf,
          code: isCode,
          [className as string]: className,
        })}
      >
        <div className="aff-edge">
          <div className="aff-edge-n">
            <div className="aff-edge-nw"></div>
            <div className="aff-edge-nn">
              {label && (
                <div className="aff-spacer">
                  <Label />
                </div>
              )}
            </div>
            <div className="aff-edge-ne"></div>
          </div>
          <div className="aff-edge-s">
            <div className="aff-edge-sw"></div>
            <div className="aff-edge-ss">
              {hint && <div className="aff-spacer">{hint}</div>}
            </div>
            <div className="aff-edge-se"></div>
          </div>
          <div className="aff-edge-w"></div>
          <div className="aff-edge-e"></div>
        </div>

        {hint && <div className="aff-hint">{hint}</div>}

        {placeholder && <div className="aff-placeholder">{placeholder}</div>}

        <WrapWhen
          when={!!unit}
          wrap={(children: any) => (
            <span
              className="aff-field"
              data-value={state.value}
              data-unit={unit}
            >
              {children}
            </span>
          )}
        >
          {input}
        </WrapWhen>

        {label && (
          <div className="aff-label">
            <Label />
          </div>
        )}

        {/* {canCopy && (
          <div className="aff-action">
            <button title={`Copy ${label ? `${label} ` : ''}to clipboard`} type="button"></button>
          </div>
        )} */}

        {canCancel && !state.empty && (
          <div className="aff-action">
            <button
              className="aff-action-button"
              onClick={handleCancel}
              type="button"
              tabIndex={-1}
              title="Clear"
            >
              {/* @ts-expect-error */}
              <Icon times />
            </button>
          </div>
        )}

        {canReveal && type === 'password' && (!state.empty || state.reveal) && (
          <div className="aff-action">
            <button
              onClick={handleReveal}
              type="button"
              tabIndex={-1}
              title={state.reveal ? 'Hide characters' : 'Reveal characters'}
            >
              {/* @ts-expect-error */}
              {state.reveal ? <Icon hide /> : <Icon reveal />}
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default FormField;
