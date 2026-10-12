import Link from "@/components/ui/Link";
import { Container } from "@/components/ui/Container";
import { getI18n } from "@/lib/i18n/server";

export default async function NotFound() {
  const { t } = await getI18n();
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink-900">{t("Halaman tidak ditemukan")}</h1>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        {t("Kembali ke Beranda")}
      </Link>
    </Container>
  );
}
