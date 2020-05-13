/*
Language: WDC 65C02 Assembly (ca65 syntax)
Author: Stephen Horn <indigo.darkwolf@gmail.com>
Description: 65C02 assembly language using CA65 syntax
Website: http://www.obelisk.me.uk/65C02/reference.html, https://www.cc65.org/doc/ca65-4.html#ss4.5
Category: assembler
*/

export default function(hljs) {
  return {
    name: 'WDC 65C02 Assembly (ca65 syntax)',
    case_insensitive: true,
    keywords: {
      $pattern: '[.%]?' + hljs.IDENT_RE,
      keyword: 'ADC AND ASL BBR BBS BCC BCS BEQ BIT BMI BNE BPL BRA BRK BVC BVS CLC CLD CLI CLV CMP CPX CPY DEC DEX DEY EOR INC INX INY JMP JSR LDA LDX LDY LSR NOP ORA PHA PHP PHX PHY PLA PLP PLX PLY RMB ROL ROR RTI RTS SBC SEC SED SEI SMB STA STP STX STY STZ TAX TAY TRB TSB TSX TXA TXS TYA WAI',
      built_in:
        // 8-bit registers
        'y x ',
      meta:
        '* .CPU .PARAMCOUNT .TIME .VERSION  .BANKBYTE .BLANK .CONCAT .CONST .HIBYTE .HIWORD .IDENT .LEFT .LOBYTE .LOWORD .MATCH .MID .REF .REFERENCED .RIGHT .SIZEOF .STRAT .SPRINTF .STRING .STRLEN .TCOUNT .XMATCH  .A16 .A8 .ADDR .ALIGN .ASCIIZ .ASSERT .AUTOIMPORT .BANKBYTES .BSS .BYT .BYTE .CASE .CHARMAP .CODE .CONDES .CONSTRUCTOR .DATA .DBYT .DEBUGINFO .DEFINE .DEF .DEFINED .DESTRUCTOR .DWORD .ELSE .ELSEIF .END .ENDENUM .ENDIF .ENDMAC .ENDMACRO .ENDPROC .ENDREP .ENDREPEAT .ENDSCOPE .ENDSTRUCT .ENUM .ERROR .EXITMAC .EXITMACRO .EXPORT .EXPORTZP .FARADDR .FEATURE .FILEOPT .FOPT .FORCEIMPORT .GLOBAL .GLOBALZP .HIBYTES .I16 .I8 .IF .IFBLANK .IFCONST .IFDEF .IFNBLANK .IFNDEF .IFNREF .IFP02 .IFP816 .IFPC02 .IFPSC02 .IFREF .IMPORT .IMPORTZP .INCBIN .INCLUDE .INTERRUPTOR .LINECONT .LIST .LISTBYTES .LOBYTES .LOCAL .LOCALCHAR .MACPACK .MAC .MACRO .ORG .OUT .P02 .P816 .PAGELEN .PAGELENGTH .PC02 .POPSEG .PROC .PSC02 .PUSHSEG .RELOC .REPEAT .RES .RODATA .SCOPE .SEGMENT .SETCPU .SMART .STRUCT .SUNPLUS .TAG .WARNING .WORD .ZEROPAGE'
    },
    contains: [
      hljs.COMMENT(
        ';',
        '$',
        {
          relevance: 0
        }
      ),
      {
        className: 'number',
        variants: [
          // Decimal number
          { begin: '#?[0-9][0-9]*', relevance: 0 },

          // Hex number in $
          { begin: '#?\\$[0-9A-Fa-f][0-9A-Fa-f]*', relevance: 0 },

          // Binary number in %
          { begin: '#?\\%[01][01]*', relevance: 0 },

          // Number in H suffix
          { begin: '#?\\[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]', relevance: 0 },
        ]
      },
      // Double quote string
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        variants: [
          // Single-quoted string
          { begin: '\'', end: '[^\\\\]\'' },
          // Backquoted string
          { begin: '`', end: '[^\\\\]`' }
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
          // Global label and local label
          { begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)' },
          // Macro-local label
          { begin: '^\\s*%%[A-Za-z0-9_$#@~.?]*:' }
        ],
        relevance: 0
      },
      {
        className: 'meta',
        begin: /^\s*\.[\w_-]+/
      }
    ]
  };
}
