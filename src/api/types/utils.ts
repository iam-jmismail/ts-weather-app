import { String as S } from 'ts-toolbelt'


export type FallbackUndefined<T, D> = T extends undefined ? D : T;

export type ErrorObjectMap<T extends string> = {
    [K in S.Split<T, ",">[number]]: string
}

