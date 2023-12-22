import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ClassValue } from 'clsx'

export const cxMerge = (...args: ClassValue[]) => twMerge(clsx(args))
