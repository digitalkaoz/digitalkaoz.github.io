import React from 'react';

import * as rp from 'react-parallax';
import { ClientOnly } from 'vite-react-ssg/single-page';
const { Parallax: RP } = rp;

type Props = { file?: string | null };

const Parallax: React.FC<Props> = ({ file = null }) => {
  return (
    <div className="mdl-grid mdl-grid--no-spacing">
      <div className="mdl-cell mdl-cell--12-col mdl-cell--hide-phone">
        <ClientOnly>{() => <RP strength={400} bgImage={file ?? undefined} />}</ClientOnly>
      </div>
    </div>
  );
};

export default Parallax;
