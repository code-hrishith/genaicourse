
Project implements a custom character-level tokenizer in JavaScript.  
It can learn and store vocabulary from input text, and encode/decode strings to/from token IDs.

## Features
- Handles special tokens:
  - `<UNK>` — Unknown token
  - `<PAD>` — Padding token
- Dynamically builds vocabulary from training text.
- Encodes text into token IDs.
- Decodes token IDs back into text.
