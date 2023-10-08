export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        className={`flex items-center ${
          outline ? "border border-caribbeangreen-400 bg-transparent" : "bg-[#0f9d58]"
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-[#fff] ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-caribbeangreen-500"}`}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    )
  }