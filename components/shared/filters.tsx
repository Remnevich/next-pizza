import React from "react";
import {Title} from "@/components/shared";

interface Props {
    className ?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text='Фильтрация' className='mb-5 font-bold' size='sm'/>
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1'/>
                <FilterCheckbox text='Новинки' value='2'/>
            </div>
        </div>
    );
}