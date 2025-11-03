import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      autoComplete="off"
      className={cn(
        "h-11 w-full min-w-0 rounded-xl border-2 border-blue-200/60 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 outline-none",
        "placeholder:text-gray-400 placeholder:font-normal",
        "hover:border-blue-300 hover:shadow-md",
        "focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:shadow-md",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
        "selection:bg-blue-200 selection:text-blue-900",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-700",
        "[&::-webkit-calendar-picker-indicator]:hidden",
        "[&::-webkit-inner-spin-button]:appearance-none",
        "[&::-webkit-outer-spin-button]:appearance-none",
        className
      )}
      {...props}
    />
  )
}

export { Input }
