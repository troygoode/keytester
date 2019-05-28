import Head from 'next/head'
import useKeypress from "../lib/use-keypress";

const ModifierKey = ({ value }) => {
  const v = (!!value) 
  return (
    <>
      <style jsx>{`
        dd {
          font-family: monospace;
          margin-top: .5em;
          margin-bottom: 1em;
          font-size: 2em;
        }
      `}</style>
      <dd>{v ? '✅ true' : '⬜️ false'}</dd>
    </>
  )
}

export default () => {
  const keypressEvent = useKeypress();
  const { key, code, which, altKey, ctrlKey, metaKey, shiftKey } = keypressEvent || {}

  return <main>
    <Head>
      <title>Keytester</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx>{`
      dt, dd {
        font-family: monospace;
      }
      dd {
        margin-top: .5em;
        margin-bottom: 1em;
        font-size: 2em;
      }
    `}</style>
    <dl>
        <dt>key</dt>
        <dd>{key || '–'}</dd>

        <dt>code</dt>
        <dd>{code || '–'}</dd>

        <dt>which / keyCode</dt>
        <dd>{which || '–'}</dd>

        <dt>shiftKey</dt>
        <ModifierKey value={shiftKey} />

        <dt>ctrlKey</dt>
        <ModifierKey value={ctrlKey} />

        <dt>altKey</dt>
        <ModifierKey value={altKey} />

        <dt>metaKey</dt>
        <ModifierKey value={metaKey} />
    </dl>

  </main>;
};
