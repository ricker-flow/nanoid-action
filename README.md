# Nano ID action

Creates a Nano ID to use in the build process. Useful for simple tag on builds. 

## Inputs

### `alphabet`

Optional. The set of characters to use in the ID. Defaults to `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.

### `length`

Optional. The number of characters in the ID. Defaults to 8.

## Output

### `id`

The generated Nano ID.

## Example

```yaml
name: Nano ID
on:
  workflow_dispatch:
jobs:
  build:
    name: Nano IDs
    runs-on: ubuntu-latest
    steps:
      - name: Default
        uses: ricker-flow/nanoid-action@v1
      - name: Long
        uses: ricker-flow/nanoid-action@v1
        with:
          length: 20
      - name: Alphabet
        uses: ricker-flow/nanoid-action@v1
        with:
          alphabet: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-
  
```
