npx shadcn@latest add @react-bits/TextCursor-JS-CSS

import TextCursor from './TextCursor';

<TextCursor
  text="Hello!"
  delay={0.01}
  spacing={80}
  followMouseDirection={true}
  randomFloat={true}
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/>

npx shadcn@latest add @react-bits/DecryptedText-JS-CSS

import DecryptedText from './DecryptedText';

{/* Example 1: Defaults (hover to decrypt) */}
<DecryptedText text="Hover me!" />

{/* Example 2: Customized speed and characters */}
<DecryptedText
text="Customize me"
speed={100}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>

{/* Example 3: Animate on view (runs once) */}
<div style={{ marginTop: '4rem' }}>
<DecryptedText
  text="This text animates when in view"
  animateOn="view"
  revealDirection="center"
/>
</div>

npx shadcn@latest add @react-bits/CircularGallery-JS-CSS

import CircularGallery from './CircularGallery'

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>

npx shadcn@latest add @react-bits/LetterGlitch-JS-CSS

import LetterGlitch from './LetterGlitch';
  
<LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/>