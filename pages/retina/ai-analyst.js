import { CapabilityPage } from "@/components/marketing/Marketing";
import { getProduct, PRODUCT_FAMILIES } from "@/content/revampContent";
export default function Page() { return <CapabilityPage family={PRODUCT_FAMILIES.retina} product={getProduct("retina", "ai-analyst")} />; }
