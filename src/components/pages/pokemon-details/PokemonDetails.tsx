import {PokemonDetail} from "../../../lib/types";
import {Link} from "react-router";

export function PokemonDetails({ pokemon }: { pokemon: PokemonDetail }) {
  return (
    <section className={'flex flex-col gap-y-8'}>
      <Link to={'/'} className={'text-sky-500 hover:underline hover:text-sky-700'}>&larr; Back</Link>
      <h2 className={'text-2xl font-black capitalize'}>{pokemon.name}</h2>
      <dl className={'grid grid-cols-2 max-w-sm'}>
        <dt className={'font-bold'}>ID</dt>
        <dd>{ pokemon.id }</dd>
        <dt className={'font-bold'}>Weight</dt>
        <dd>{ pokemon.weight }</dd>
        <dt className={'font-bold'}>Height</dt>
        <dd>{ pokemon.height }</dd>
      </dl>
    </section>
  )
}