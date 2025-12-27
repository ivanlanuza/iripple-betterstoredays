import Link from "next/link";
import clsx from "clsx";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition shadow-sm";

  const styles = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",
    secondary:
      "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",
    ghost:
      "bg-transparent text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2",
  };

  const cls = clsx(
    base,
    styles[variant] || styles.primary,
    disabled && "opacity-60 cursor-not-allowed",
    className
  );

  // LINK MODE
  if (href) {
    const url = String(href);
    const isExternal = /^https?:\/\//i.test(url) || url.startsWith("mailto:") || url.startsWith("tel:");
    const isHashOnly = url.startsWith("#");

    const handleLinkClick = (e) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    // We render an <a> element for hash links and external links.
    // For internal routes, we wrap <a> with <Link> to avoid passing random props to next/link.
    const anchorProps = {
      ...props,
      onClick: handleLinkClick,
      className: cls,
      "aria-disabled": disabled ? true : undefined,
      tabIndex: disabled ? -1 : props.tabIndex,
      // prevent navigation/clicks when disabled
      style: disabled
        ? { ...(props.style || {}), pointerEvents: "none" }
        : props.style,
    };

    if (isExternal || isHashOnly) {
      return (
        <a href={url} {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={url} legacyBehavior>
        <a href={url} {...anchorProps}>
          {children}
        </a>
      </Link>
    );
  }

  // BUTTON MODE
  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
