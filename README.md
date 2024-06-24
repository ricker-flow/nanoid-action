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
uses: 
with:
  length: 12
  
```