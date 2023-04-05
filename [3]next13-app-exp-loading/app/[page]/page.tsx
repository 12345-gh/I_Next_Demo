import {ClientComponent} from "@/components/ClientComponent";
import {ServerComponent} from "@/components/ServerComponent";

export default async function Page({params}: { params: { page: string } }) {
    return (
        <ClientComponent header={params.page}>
            {/* @ts-expect-error Server Component */}
            <ServerComponent page={params.page}/>
        </ClientComponent>
    );
}
export const dynamic = "force-dynamic";
