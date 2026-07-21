"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PhoneInput from "react-phone-number-input/react-hook-form";
import flags from "react-phone-number-input/flags";
import ar from "react-phone-number-input/locale/ar.json";
import en from "react-phone-number-input/locale/en.json";
import "react-phone-number-input/style.css";

const ARAB_ME_COUNTRIES = [
  "EG",
  "SA",
  "AE",
  "KW",
  "QA",
  "BH",
  "OM",
  "JO",
  "LB",
  "SY",
  "PS",
  "IQ",
  "LY",
  "TN",
  "DZ",
  "MA",
];

function CountrySelect({
  value,
  onChange,
  options,
  disabled,
  readOnly,
  iconComponent: Icon,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState(null);
  const rootRef = useRef(null);
  const menuRef = useRef(null);

  const selected = options.find(
    (option) => !option.divider && option.value === value
  );
  const countryOptions = options.filter((option) => !option.divider);

  useLayoutEffect(() => {
    if (!isOpen || !rootRef.current) return;

    const updatePosition = () => {
      const rect = rootRef.current.getBoundingClientRect();
      setMenuStyle({
        position: "fixed",
        top: rect.bottom + 6,
        left: rect.left,
        width: Math.max(rect.width + 180, 240),
        zIndex: 9999,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      const inTrigger = rootRef.current?.contains(event.target);
      const inMenu = menuRef.current?.contains(event.target);
      if (!inTrigger && !inMenu) setIsOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="PhoneInputCountry contact-phone-country" ref={rootRef}>
      <button
        type="button"
        className="contact-phone-country-trigger"
        disabled={disabled || readOnly}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {Icon && (
          <Icon
            aria-hidden
            country={value}
            label={selected?.label}
            aspectRatio={undefined}
          />
        )}
        <span className="PhoneInputCountrySelectArrow" aria-hidden />
      </button>

      {isOpen &&
        menuStyle &&
        createPortal(
          <ul
            ref={menuRef}
            className="contact-phone-country-menu"
            role="listbox"
            aria-label="Country"
            style={menuStyle}
          >
            {countryOptions.map((option) => {
              const isSelected = option.value === value;
              const optionKey = option.value ?? "international";
              const Flag = option.value ? flags[option.value] : null;

              return (
                <li key={optionKey} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    className={`contact-phone-country-option${
                      isSelected ? " is-selected" : ""
                    }`}
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                  >
                    {Flag ? (
                      <span className="contact-phone-country-flag" aria-hidden>
                        <Flag title={option.label} />
                      </span>
                    ) : (
                      Icon && (
                        <span
                          className="contact-phone-country-flag contact-phone-country-flag--intl"
                          aria-hidden
                        >
                          <Icon
                            country={undefined}
                            label={option.label}
                            aspectRatio={undefined}
                          />
                        </span>
                      )
                    )}
                    <span className="contact-phone-country-label">
                      {option.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>,
          document.body
        )}
    </div>
  );
}

export default function ContactPhoneInput({ control, locale, id }) {
  return (
    <div className="contact-phone-field" dir="ltr">
      <PhoneInput
        id={id}
        name="phone"
        control={control}
        international
        defaultCountry="EG"
        countries={ARAB_ME_COUNTRIES}
        addInternationalOption
        countryCallingCodeEditable
        labels={locale === "ar" ? ar : en}
        flags={flags}
        countrySelectComponent={CountrySelect}
        className="contact-phone-input"
      />
    </div>
  );
}
