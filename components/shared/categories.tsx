import React from "react";
import {cn} from "@/lib/utils";

interface Props {
    className?: string
}

const cats: Array<string> = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитка', 'Десерты']
const activeIndex: number = 0

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl ', className || '')}>
            {cats?.map((cat, index) => {

                return (
                    <a className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} key={index}>
                        <button>{cat}</button>
                    </a>
                )
            })}
        </div>
    )
}