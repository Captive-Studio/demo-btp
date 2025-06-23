'use client';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { IPrimitiveIcon, PrimitiveIcon, UIIcon } from '@gluestack-ui/icon';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from 'nativewind';
import React from 'react';
import type { TextProps, ViewProps } from 'react-native';
import { Platform, Pressable, Text, View } from 'react-native';

const IndicatorWrapper = React.forwardRef<
  React.ComponentRef<typeof View>,
  ViewProps
>(function IndicatorWrapper({ ...props }, ref) {
  return <View {...props} ref={ref} />;
});

const LabelWrapper = React.forwardRef<
  React.ComponentRef<typeof Text>,
  TextProps
>(function LabelWrapper({ ...props }, ref) {
  return <Text {...props} ref={ref} />;
});

const IconWrapper = React.forwardRef<
  React.ComponentRef<typeof PrimitiveIcon>,
  IPrimitiveIcon
>(function IconWrapper({ ...props }, ref) {
  return <UIIcon {...props} ref={ref} />;
});

const SCOPE = 'CHECKBOX';
const UICheckbox = createCheckbox({
  // @ts-expect-error : internal implementation for r-19/react-native-web
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View, SCOPE)
      : withStyleContext(Pressable, SCOPE),
  Group: View,
  Icon: IconWrapper,
  Label: LabelWrapper,
  Indicator: IndicatorWrapper,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

const todoStyle = tva({
  base: 'group/checkbox flex-row items-center justify-start web:cursor-pointer data-[disabled=true]:cursor-not-allowed',
  variants: {
    size: {
      lg: 'gap-2',
      md: 'gap-2',
      sm: 'gap-1.5',
    },
  },
});

const todoIndicatorStyle = tva({
  base: 'justify-center items-center border-outline-900 bg-transparent rounded web:data-[focus-visible=true]:outline-none web:data-[focus-visible=true]:ring-2 web:data-[focus-visible=true]:ring-indicator-primary data-[checked=true]:bg-primary-600 data-[checked=true]:border-primary-600 data-[hover=true]:data-[checked=false]:border-outline-500 data-[hover=true]:bg-transparent data-[hover=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[checked=true]:bg-primary-700 data-[hover=true]:data-[checked=true]:border-primary-700 data-[hover=true]:data-[checked=true]:data-[disabled=true]:border-primary-600 data-[hover=true]:data-[checked=true]:data-[disabled=true]:bg-primary-600 data-[hover=true]:data-[checked=true]:data-[disabled=true]:opacity-40 data-[hover=true]:data-[checked=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[hover=true]:data-[disabled=true]:border-outline-900 data-[hover=true]:data-[disabled=true]:data-[invalid=true]:border-error-700 data-[active=true]:data-[checked=true]:bg-primary-800 data-[active=true]:data-[checked=true]:border-primary-800 data-[invalid=true]:border-error-700 data-[disabled=true]:opacity-40',
  parentVariants: {
    size: {
      lg: 'w-6 h-6 border-[3px]',
      md: 'w-5 h-5 border-2',
      sm: 'w-4 h-4 border-2',
    },
  },
});

const todoLabelStyle = tva({
  base: 'text-typography-900 data-[checked=true]:line-through data-[checked=true]:text-typography-600 data-[hover=true]:text-typography-900 data-[hover=true]:data-[checked=true]:text-typography-600 data-[hover=true]:data-[checked=true]:data-[disabled=true]:text-typography-600 data-[hover=true]:data-[disabled=true]:text-typography-400 data-[active=true]:text-typography-600 data-[active=true]:data-[checked=true]:text-typography-600 data-[disabled=true]:opacity-40 web:select-none',
  parentVariants: {
    size: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
});

const todoIconStyle = tva({
  base: 'text-typography-50 fill-none',

  parentVariants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
  },
});

const TodoGroup = UICheckbox.Group;

type ICheckboxProps = React.ComponentPropsWithoutRef<typeof UICheckbox> &
  VariantProps<typeof todoStyle>;

const Todo = React.forwardRef<
  React.ComponentRef<typeof UICheckbox>,
  ICheckboxProps
>(function Checkbox({ className, size = 'md', ...props }, ref) {
  return (
    <UICheckbox
      className={todoStyle({
        class: className,
        size,
      })}
      {...props}
      context={{
        size,
      }}
      ref={ref}
    />
  );
});

type ITodoIndicatorProps = React.ComponentPropsWithoutRef<
  typeof UICheckbox.Indicator
> &
  VariantProps<typeof todoIndicatorStyle>;

const TodoIndicator = React.forwardRef<
  React.ComponentRef<typeof UICheckbox.Indicator>,
  ITodoIndicatorProps
>(function TodoIndicator({ className, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  return (
    <UICheckbox.Indicator
      className={todoIndicatorStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
      })}
      {...props}
      ref={ref}
    />
  );
});

type ITodoLabelProps = React.ComponentPropsWithoutRef<
  typeof UICheckbox.Label
> &
  VariantProps<typeof todoLabelStyle>;
const TodoLabel = React.forwardRef<
  React.ComponentRef<typeof UICheckbox.Label>,
  ITodoLabelProps
>(function TodoLabel({ className, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);
  return (
    <UICheckbox.Label
      className={todoLabelStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
      })}
      {...props}
      ref={ref}
    />
  );
});

type ITodoIconProps = React.ComponentPropsWithoutRef<
  typeof UICheckbox.Icon
> &
  VariantProps<typeof todoIconStyle>;

const TodoIcon = React.forwardRef<
  React.ComponentRef<typeof UICheckbox.Icon>,
  ITodoIconProps
>(function TodoIcon({ className, size, ...props }, ref) {
  const { size: parentSize } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UICheckbox.Icon
        ref={ref}
        {...props}
        className={todoIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UICheckbox.Icon
        ref={ref}
        {...props}
        className={todoIconStyle({ class: className })}
      />
    );
  }

  return (
    <UICheckbox.Icon
      className={todoIconStyle({
        parentVariants: {
          size: parentSize,
        },
        class: className,
        size,
      })}
      {...props}
      ref={ref}
    />
  );
});

Todo.displayName = 'Todo';
TodoIndicator.displayName = 'TodoIndicator';
TodoLabel.displayName = 'TodoLabel';
TodoIcon.displayName = 'TodoIcon';

export { Todo, TodoGroup, TodoIcon, TodoIndicator, TodoLabel };

