import {ClientComponent} from "@/components/ClientComponent";
import {ServerComponent} from "@/components/ServerComponent";

export default async function Page() {
    return (
        <ClientComponent header="logout">
            {/* @ts-expect-error Server Component */}
            <ServerComponent page="logout"/>
        </ClientComponent>
    );
}

export const dynamic = "auto";
// export const dynamic = "force-dynamic";
// export const dynamic = "force-static";


