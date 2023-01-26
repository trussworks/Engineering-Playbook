# ADRs

The AppEng ADR template can be found at `docs/templates/adr-appeng.md`. Add a
number prefix of four digits and name your ADR when adding it to
`docs/appeng/adrs/` as a Markdown file to start your own ADR.

```bash
export TWEP_NUM_ADR=$(($(find docs/appeng/adrs | grep -E '[0-9]+-.*\.mdx?' | wc -l)+1))
export TWEP_NUM_PREFIX=$(printf '%04d' "$TWEP_NUM_ADR")
cp docs/templates/adr-appeng.md ${#TWEP_NUM_PREFIX}-my-latest-adr.md
unset TWEP_NUM_PREFIX
```

import DocCardList from '@theme/DocCardList';

<DocCardList />
