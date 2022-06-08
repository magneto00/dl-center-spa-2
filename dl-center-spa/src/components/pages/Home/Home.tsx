import { DLCenter, TitledText } from 'src/components/sections';
import texts from 'src/translations/textsHome';

export function Home() {
  return (
    <div>
      <TitledText
        header={texts.above.header}
        headerTag="h1"
        description={texts.above.description}
      />
      <DLCenter />
      <TitledText
        header={texts.below.header}
        headerTag="h2"
        description={texts.below.description}
      />
    </div>
  );
}
