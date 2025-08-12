class Tokenizer {
  constructor() {
    this.vocab = {};
    this.reversevocab = {};
    this.specialtokens = {
        UNK:"<UNK>",
        PAD:"<PAD>"
    };
    
  }

  split(text){
    return text.split("");
  }

  learn(text) {
    let tokens = this.split(text);


    let i = 0;
    for(let token of Object.values(this.specialtokens)){
        if(!this.vocab[token]){
            this.vocab[token] = i;
            this.reversevocab[i] = token;
            i++;
        }
    }

    for (let token of tokens) {
        if (!this.vocab.hasOwnProperty(token)) {
            this.vocab[token] = i;
            this.reversevocab[i] = token;
            i++;
        }
    }
  }

  encode(text) {
    let tokens = this.split(text);
    return tokens.map(token =>
        this.vocab.hasOwnProperty(token) ? this.vocab[token] : this.vocab[this.specialtokens.UNK]
    )
  }

  decode(tokenIds) {
    return tokenIds.map(id => 
        this.reversevocab.hasOwnProperty(id) ? this.reversevocab[id] : this.specialtokens.UNK
    ).join("");
}
}


const t = new Tokenizer();
t.learn("The quick brown fox jumps over the lazy dog & THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG !@#$%^*()-=_+{}|;':<>?,./`~[]");


const decoding = t.encode("chai-aur-code!!")
console.log(decoding);


console.log(t.decode(decoding))
