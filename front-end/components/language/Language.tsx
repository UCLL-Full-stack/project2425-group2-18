import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Language: React.FC = () => {
    const router = useRouter();
    const { locale, pathname, asPath, query } = router;
    const selectRef = useRef<HTMLSelectElement>(null);

    const handleLanguageChange = (event: { target: { value: string } }) => {
        const newLocale = event.target.value;
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    useEffect(() => {
        if (selectRef.current) {
            const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
            selectRef.current.style.width = `${selectedOption.text.length + 2}ch`;
        }
    }, [locale]);

    return (
        <div className="ml-6">
            <label htmlFor="language" className="text-2xl font-semibold text-white">
                Language:
            </label>
            <select
                id="language"
                ref={selectRef}
                className="bg-custom-blue ml-2 p-1 text-white border border-white rounded hover:cursor-pointer"
                value={locale}
                onChange={handleLanguageChange}
            >
                <option value="en">English</option>
                <option value="nl">Nederlands</option>
            </select>
        </div>
    );
};

export default Language;