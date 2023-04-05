// import {notFound} from "next/navigation";

import {Page, TProps} from "@/components/page";

export async function generateStaticParams() {
    return [{slug: "1"}, {slug: "2"}];
}

export default function PageComponent(props: TProps) {
    // console.log(`~~~~~ props ~~~~~`, props);

    // if (parseInt(props.params.slug) > 2) {notFound()}

    return <Page {...props} />;
}

export const dynamicParams = true;
