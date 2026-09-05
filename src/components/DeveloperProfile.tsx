import { useEffect, useRef, useState, type ChangeEvent } from "react";
import {
  AtSign,
  BookOpenCheck,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  MapPin,
  Upload,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FOTO_KEY = "aswaja-foto-pengembang";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Threads", href: "https://threads.net", icon: AtSign },
] as const;

export function DeveloperProfile() {
  const [photo, setPhoto] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPhoto(localStorage.getItem(FOTO_KEY));
  }, []);

  const choosePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") return;
      setPhoto(reader.result);
      try {
        localStorage.setItem(FOTO_KEY, reader.result);
      } catch {
        // Foto tetap tampil untuk sesi ini jika penyimpanan browser penuh.
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="mt-12" aria-labelledby="profil-pengembang">
      <div className="overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-md">
        <div className="h-1.5 bg-gold-line" />
        <div className="grid items-center gap-7 p-6 sm:p-8 md:grid-cols-[14rem_1fr] md:gap-10 lg:p-10">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gold-line p-1.5 shadow-gold">
              <div className="grid aspect-square w-40 place-items-center overflow-hidden rounded-full border-4 border-card bg-primary-soft sm:w-44">
                {photo ? (
                  <img
                    src={photo}
                    alt="Foto Ahmad Wildan Afif, M.Pd."
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <UserRound className="h-20 w-20 text-primary/55" aria-hidden="true" />
                )}
              </div>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={choosePhoto}
              className="sr-only"
              aria-label="Pilih foto profil"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => inputRef.current?.click()}
              className="mt-4 border-primary/30 text-primary-deep"
            >
              <Upload aria-hidden="true" />
              Pilih Foto
            </Button>
          </div>

          <div className="text-center md:text-left">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">
              Profil Pengembang &amp; Guru
            </p>
            <h2 id="profil-pengembang" className="mt-2 text-3xl font-bold sm:text-4xl">
              Ahmad Wildan Afif, M.Pd.
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gold-line md:mx-0" />

            <div className="mt-6 space-y-4 text-left">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Profesi</p>
                  <p className="mt-1 text-sm leading-6 sm:text-base">
                    Guru Aswaja di SMP Nurul Huda Mergosono, Tutor Online Pendidikan Agama Islam di
                    Universitas Terbuka (UT), serta Muallim &amp; Mushahih di UIN Maulana Malik
                    Ibrahim Malang.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-soft text-accent-foreground">
                  <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Fokus Akademik</p>
                  <p className="mt-1 text-sm leading-6 sm:text-base">
                    Pendidikan, Religi, dan Integrasi Nilai-Nilai Islam
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Malang, Jawa Timur
              </div>
            </div>

            <TooltipProvider delayDuration={150}>
              <div className="mt-6 flex justify-center gap-2 md:justify-start" aria-label="Media sosial">
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <Button asChild variant="outline" size="icon" className="rounded-full border-primary/25">
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Buka ${social.label} Ahmad Wildan Afif`}
                        >
                          <social.icon aria-hidden="true" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{social.label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}