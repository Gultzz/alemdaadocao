import { useTranslation } from "react-i18next";
import { Globe, Check, ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const languages = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage || "pt";
  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Alterar idioma"
        >
          <Globe className="h-4 w-4 text-muted-foreground" aria-hidden />
          <span>{currentLangObj.short}</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground opacity-50" aria-hidden />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[140px] overflow-hidden rounded-xl border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          align="end"
          sideOffset={8}
        >
          {languages.map((lang) => (
            <DropdownMenu.Item
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="relative flex cursor-pointer select-none items-center rounded-lg px-3 py-2 text-sm outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
            >
              <span className="flex-1">{lang.label}</span>
              {currentLang === lang.code && (
                <Check className="h-4 w-4 text-primary" aria-hidden />
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default LanguageSwitcher;
