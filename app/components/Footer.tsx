import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0A1128] pb-10 pt-20">
      <div className="container mx-auto max-w-[1200px] px-6">

        <div className="mb-20 flex flex-wrap justify-between gap-15">

          {/* Brand Col */}
          <div className="max-w-[300px]">
            <div className="mb-5 flex items-center gap-2">
              <Image src="/reactive-logo.svg" alt="Logo" width={150} height={150} />
              {/* <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#3A7BD5] to-[#00D2FF]">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9L7.5 4.5L12 9L7.5 13.5L3 9Z" fill="white" className="opacity-90" />
                  <path d="M8 9L12.5 4.5L15 7L10.5 11.5L8 9Z" fill="white" className="opacity-50" />
                </svg>
              </div> */}
              {/* <span className="text-lg font-extrabold tracking-tight text-[#F4F7F6]">
                react<span className="text-[#00D2FF]">IVE</span>
              </span> */}
            </div>

            <p className="mb-6 text-[15px] leading-relaxed text-[#F4F7F6]/60">
              {t('tagline')}
            </p>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm font-semibold text-[#F4F7F6] no-underline transition-all duration-200 hover:bg-white/10 hover:text-[#25D366]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('messageUs')}
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-15">
            <div className="flex flex-col gap-4">
              <div className="mb-2 text-[15px] font-semibold text-[#F4F7F6]">{t('platform')}</div>
              <a href="#" className="text-sm text-[#F4F7F6]/60 no-underline transition-colors duration-200 hover:text-[#00D2FF]">Custom Software</a>
              <a href="#" className="text-sm text-[#F4F7F6]/60 no-underline transition-colors duration-200 hover:text-[#00D2FF]">Process Automation</a>
              <a href="#" className="text-sm text-[#F4F7F6]/60 no-underline transition-colors duration-200 hover:text-[#00D2FF]">Data Dashboards</a>
              <a href="#" className="text-sm text-[#F4F7F6]/60 no-underline transition-colors duration-200 hover:text-[#00D2FF]">API Integrations</a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="mb-2 text-[15px] font-semibold text-[#F4F7F6]">{t('company')}</div>
              <a href="#" className="text-sm text-[#F4F7F6]/60 no-underline transition-colors duration-200 hover:text-[#00D2FF]">{t('about')}</a>
              <a href="#" className="text-sm text-[#F4F7F6]/60 no-underline transition-colors duration-200 hover:text-[#00D2FF]">Case Studies</a>
              <a href="#" className="text-sm text-[#F4F7F6]/60 no-underline transition-colors duration-200 hover:text-[#00D2FF]">{t('contact')}</a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/5 pt-8">
          <div className="text-sm text-[#F4F7F6]/40">
            © {new Date().getFullYear()} reactIVE. {t('rights')}
          </div>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <a href="#" className="hidden text-[13px] text-[#F4F7F6]/40 no-underline hover:text-white/60 sm:block">{t('privacy')}</a>
            <a href="#" className="hidden text-[13px] text-[#F4F7F6]/40 no-underline hover:text-white/60 sm:block">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
