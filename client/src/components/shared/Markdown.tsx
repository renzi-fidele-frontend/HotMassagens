export default function Markdown({ texto, separador }: { texto: string; separador: string }) {
   return texto?.split(separador)?.map((line, key) => <p key={key}>{line}</p>);
}
