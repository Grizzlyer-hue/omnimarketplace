import ServicePage from "@/components/ServicePage";
import { SERVICE_PAGES } from "@/lib/servicePages";
import { pageMetadata } from "@/lib/seo";

const data = SERVICE_PAGES.landing;

export const metadata = pageMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: data.path,
});

export default function Page() {
  return <ServicePage data={data} />;
}
