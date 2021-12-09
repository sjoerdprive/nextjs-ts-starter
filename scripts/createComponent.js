const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const args = minimist(process.argv.slice(2));

const componentName = args['_'][0];
const baseType = args['type'] || 'div';

const capitalizedBaseType =
  baseType.charAt(0).toUpperCase() + baseType.slice(1);

const typeInterface = `HTML${capitalizedBaseType}Element`;

const capitalComponentName =
  componentName.charAt(0).toUpperCase() + componentName.slice(1);

fs.mkdirSync(path.join('components', capitalComponentName));

const componentDir = path.join('components', capitalComponentName);

fs.writeFileSync(
  path.join(componentDir, `${componentName}.module.scss`),
  `
  @use '../../styles/mixins/' as mixins;
  @import '../../styles/variables';

  .${componentName} {
    
  }
  `
);

fs.writeFileSync(
  path.join(componentDir, 'index.tsx'),
  `
  import { HTMLAttributes } from 'react';
  
  import classes from './${componentName}.module.scss';

  interface I${capitalComponentName} extends HTMLAttributes<${typeInterface}> {}

  export default function ${capitalComponentName}(props: I${capitalComponentName}) {
    return <${baseType} className={classes.${componentName}}></${baseType}>;
  }
`
);
