import Clients from "@/components/organisms/Clients";
import Hero from "@/components/organisms/Hero";

export default function Home() {
	return (
		<div className="px-32 mb-10">
			<Hero />
			<Clients />
		</div>
	);
}
