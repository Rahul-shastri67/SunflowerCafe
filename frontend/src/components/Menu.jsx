import { useEffect, useState } from "react";
import { CATEGORIES, MENU } from "../data/menu";
import { CategoryNavDesktop, CategoryNavMobile } from "./CategoryNav";
import { MenuSection } from "./MenuSection";

export const Menu = () => {
    const [active, setActive] = useState(CATEGORIES[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
        );
        CATEGORIES.forEach((c) => {
            const el = document.getElementById(c.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div id="menu" data-testid="menu-root">
            <CategoryNavDesktop active={active} />
            <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                <div className="flex gap-4 sm:gap-6">
                    <CategoryNavMobile active={active} />
                    <div className="min-w-0 flex-1">
                        {CATEGORIES.map((c) => (
                            <MenuSection key={c.id} category={c} items={MENU[c.id]} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
