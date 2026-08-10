/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
MMREvents.machines(catalyst => {
    catalyst.create("mmr:portal")
        .color('#00202020')
        .name(Component.translatable("catalyst.mmr.machine.portal"))
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["  aababababababababababababababababaa","  abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbba","  bbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabb","  abaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaba","  bbaabbbbbbbbbbbbbbbbbbbbbbbbbbbaabb","  abaabaaaaaaaaaaaaaaaaaaaaaaaaabaaba","  bbaababbbbbbbbbbbbbbbbbbbbbbbabaabb","  abaababbbbaabaaaaaaaaabaabbbbabaaba","  bbaababbabbabbbbbbbbbbbabbabbabaabb","  abaababbbbbbbbabaaababbbbbbbbabaaba","  bbaabababbabbbababababbbabbababaabb","  abaababaabbbbbabaaababbbbbaababaaba","  bbaababbbbbbabbbbbbbbbabbbbbbabaabb","  abaabababbbbbbaabbbaabbbbbbababaaba","  bbaabababaaabaabaaabaabaaabababaabb","  abaabababbbbbabbbabbbabbbbbababaaba","  bbaabababaaabbabbabbabbaaabababaabb","  abaabababababbaaabaaabbababababaaba","  bbaabababaaabbabbabbabbaaabababaabb","  abaabababbbbbabbbabbbabbbbbababaaba","  bbaabababaaabaabaaabaabaaabababaabb","  abaabababbbbbbaabbbaabbbbbbababaaba","  bbaababbbbbbabbbbbbbbbabbbbbbabaabb","  abaababaabbbbbabaaababbbbbaababaaba","  bbaabababbabbbababababbbabbababaabb","  abaababbbbbbbbabaaababbbbbbbbabaaba","  bbaababbabbabbbbbbbbbbbabbabbabaabb","  abaababbbbaabaaaaaaaaabaabbbbabaaba","  bbaababbbbbbbbbbbbbbbbbbbbbbbabaabb","  abaabaaaaaaaaaaaaaaaaaaaaaaaaabaaba","  bbaabbbbbbbbbbbbbbbbbbbbbbbbbbbaabb","  abaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaba","  bbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabb","  abbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbba","  aababababababababababababababababaa"],
                ["  oppppppppppppppqqqqqppppppppppppppr","  ghhhhhhhhhhhhiihiiihhhhhhhhhhhhhhhj","  ghaaahhhhhhhhhhhiiihihhhhhhhhhaaahj","  ghakahhhhhhhhhihhihhiihhhhhhhhakahj","  ghaaahhhhhhhhhihihihhhhhhhhhhhaaahj","  ghhhhhhhhhhhhhhiihihihhhhhhhhhhhhhj","  ghhhhhhhhhhhhiihiihiihhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhiiihhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhllhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhllhhhhhhhhhhhhhhhhj","  ghnaanhhhhhhhhhahhhahhhhhhhhhnaanhj","  ghannahhhhhhhhhllllhhhhhhhhhhannahj","  ghannahhhhhhhhlllllhhhhhhhhhhannahj","  ghannahhhhhhhlhhlllllhhhhhhhhannahj","  ghnaanhhhhhhhhhahhlahhhhhhhhhnaanhj","  ghhhhhhhhhhhhhhhhhlhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhiiihhhhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhiiiiiihhhhhhhhhhhhhj","  ghhhhhhhhhhhhhhhihihihhhhhhhhhhhhhj","  ghaaahhhhhhhhhiiihihhhhhhhhhhhaaahj","  ghakahhhhhhhhhihiiihhhhhhhhhhhakahj","  ghaaahhhhhhhhihhhihhiihhhhhhhhaaahj","  ghhhhhhhhhhhhhhihiihihhhhhhhhhhhhhj","  cddddddddddddddeeeeeddddddddddddddf"],
                ["                                     ","   tt t         w      w       tt t  ","   txyxt        G        t     txyxt ","    yky  Ot uu  E         OO    ykU  ","    xyx  HHOuuttD uttutG    P   xyx  ","       sPtsuttttC u  s Cu u I   B    ","        Itttutsutt  u   BHKIIIL      ","      KIIILtt      t   t    I        ","        I tBB qqSSTTTSppS   F  BB    ","    A   F  Bs t         H  B  AA     ","    tAt At  Bttt              A      ","    utAtt t Hutu            ttts  v  ","    ttututt  uu      u  t tut tt     ","    uAtut   uB  tst  st    ttttt     ","    uAA utttH   ut  uRt     utt      ","    annatutt     a x at        anna  ","    nnnnutut   u      s tt     nnnnQ ","    nnnnttu t    x m x  u  u   nnnnQ ","    nnnntt    t                nnnnQ ","    anna        ta x a uut     an a  ","              utt u    ut s          ","      utu tutuu  uu tttuu u          ","     tts t tu u  tutttu tuB O   O    ","    t u t ttt t   u t   t   O    OB  ","    tt uO uuH             vtttP   B  ","   st Ou Pttt t  ttttt   t    ItuBB  ","    t H  I   AMddeeNeeMMM  HKIIIL    ","      AKIIIL  t utt t      H  I      ","         I     Jututt G       F t    ","         F   A tGt  tuD   H  usA  t  ","    xyx   A BsuuDt u uE  uAt u  xyx  ","    zky  AA B   Cu    Cu tt uttuykyt ","   txyxt tu              ttttuttxyxt ","   st ttut   v  wt  utw tvuutt  tutt ","                                     "],
                ["                                     ","                V      V             ","    WyW                         WyW  ","    ykU         J               ykU  ","    WyW                J        WyW  ","                v           Y        ","        Y                  tYY       ","       vYY                  Y        ","        Y                            ","              SSqSTSSSSSS            ","                                     ","                                     ","                                     ","                                     ","                     R               ","    anna         a W a%   Z    anna  ","    nnnn            Z          nnnn  ","    nnnn  #     #W   W      #  nnnn$ ","    nnnn                       nnn\"  ","    anna         a W a         an    ","                                     ","                                     ","                                     ","                                     ","                 Z!!                 ","              MMeMeMeeMdd     Y      ","         v                   tXY     ","        YYY                   Y      ","         X     v                     ","                J                    ","    WyW               v         WyW  ","    zky               J         nkz  ","    WyW                         WyW  ","                V     V              ","                                     "],
                ["                                     ","                                     ","     y                           y   ","    UkU         v               yky  ","     y                 v         y   ","                                     ","        Y                   Y        ","        X                   X        ","                                     ","                                     ","              SSSSqqSqSSS            ","                                     ","                                     ","                                     ","          R RR     RRRRR RRR         ","    naannnnaaannannnnnannaaannnnaan$ ","    annnnnnnnnnnnnnnnnnnnnnnnnnnnna$ ","    annnnnnnnnnnnnnnnnnnnnnnnnnnnna$ ","    annnnnnnnnnnnnnnnnnnnnnnnnnnnna$ ","     aannnnaaannannn  a  aaannnnaa   ","                            &&       ","                                     ","                                     ","                 !!!                 ","              MMMeeNMdMMM            ","                              Y      ","                              Xv     ","         Y                    Y      ","         Y                           ","                                     ","     y                           y   ","    yky                         nky  ","     y                           z   ","                                     ","                                     "],
                ["                                     ","                                     ","     y                           y   ","    ykU                         ykz  ","     y                           y   ","                                     ","        t                   X        ","       YY                            ","                                     ","                                     ","                                     ","              pSTTSqSSSSS            ","                      Z              ","                                     ","         )RRRRRRRRRRRRRR RRR )RR     ","    annanaannnaaannnnnaaannnaananna  ","     nnnnnnnnnnnnnnn((((nnnnnnnnnnn$ ","      nnnnnnnnnnnnnn((((nnnnnnnnnnn$ ","     nnnnnnnnnnnnnnn((((nnnnnnnnnn\"$ ","    annanaan\"\"aaa\"\"\"  aaannnaananna  ","         '       &           &&      ","                                     ","                 !!!                 ","              MdMeMMeeMdM            ","                                     ","                              u      ","                              X      ","         Y                           ","                                     ","                                     ","     z                           y   ","    yky                         nky  ","     y                           z   ","                                     ","                                     "],
                ["                                     ","   #   #                       #   # ","     U                           y   ","    yky                         ykz  ","     y                           y   ","   #   #                       #   # ","                            Y        ","       X                    #        ","                                     ","                                     ","                                     ","                                     ","              SSSSSSSTTqS            ","         *           ,,,     *       ","         +RR RR R    RRRRR  R+RRR    ","    annannnannnnnnnnnnnnnnnannnanna$ ","    nnnnnnnnnn((((((((((nnnnnnnnnnn$ ","    \"nnnnnnnnn(((((n((((nnnnnnnnnnn$ ","    \"nnnnnnnnn((((((((((nnnnnnnnnnn$ ","    anna    \"\"\"nn\"\"\"nnnnnnnannnanna$ ","         *       &           +&  &   ","         '      !!!!         '       ","              MMMMNeMMMMM            ","                                     ","                                     ","                                     ","                              Y      ","         X                           ","                                     ","   #   #                       #   # ","     z                           y   ","    yky                         yky  ","     y                           y   ","   #   #                       #   # ","                                     "],
                ["                                     ","   -///-                       -///- ","   /:;:/                       /.;:/ ","   /;:;/                       /;:z/ ","   /:;:/                       /:;:/ ","   -///-                       -///- ","                            Y        ","       Y                    Y        ","                                     ","                                     ","                                     ","                                     ","         *                   *       ","         '    SSqqSppSSSS    '       ","                     @@@     RRR     ","    naannnaannnnnnnnnnnnnnnaannnaan  ","    annnnnnnnnnnn((((((nnnnnnnnnnna$ ","   [annnnnnnnnnnn((n(((nnnnnnnnnnna$ ","   [annnnnnnnnnnn((((((nnnnnnnnnnna$ ","    naann aa\"\"\"nn\"\"\"nnnnnnnaannnaan  ","                !@!          &&&&&&  ","         *    MMddMMeeMMM    *       ","         '                   '       ","                                     ","                                     ","                                     ","    ?      =                 YX      ","   >     X                           ","          =<<                        ","   -///-  < <                  -///- ","   /:;:/  <                    /:z.. ","   /;:;/                       /z:z/ ","   /:;:.                       /:z:/ ","   -...-                       -///- ","                                     "],
                ["                                     ","   v w v                       v w v ","    \\ \\                         \\ \\  ","   w ] w                       w ] w ","    \\ \\                         \\ \\  ","   v w v                       v w v ","                            u        ","       Y                    X        ","       #                    Ç        ","                           <         ","                            =        ","                                     ","         Â                   Â       ","                                     ","              ppSSqqSpqSS   RRR      ","    annan\"\"\"nn\"\"\"nn\"\"\"nnn\"\"\"nnna\"\"a  ","   [nnn  \"\"Ãnn\"\"\"nn\"\"\"nnn\"\"Ãnnnnnn\"$ ","   [nnnnÄÅÆÅÄÄÄÅÆÅÄkÄÅÆÅÄÄÄÅÆÅÄnnn\"$ ","   [nnnnnnnÃn nnn\"\"\"nnnn\"\"\"Ãnnnnnnn$ ","    annannnnnn  n\"\"\"nnnn\"\"\"nnnnanna$ ","              MdMMeeeMNMd    &&&&&   ","                                     ","         Â                   Â       ","                                     ","           ?                         ","                                     ","    Á     ={  =              Y       ","   }     Y~   À                      ","          `{|  <                     ","   v w v  _?^                  v w v ","    \\ \\   ^                     \\ \\  ","   w ] w                       w ] w ","    \\ \\                         \\ \\  ","   v w v                       v w v ","                                     "],
                ["                                     ","     V                           V   ","                                     ","   V È V                       V È V ","                                     ","     V                           V   ","                       >     =       ","                            Y        ","       Y                    å  <  <  ","                          =ä         ","                         < ={        ","        àÞß                 àÞß      ","        ÛkÜ                 ÛkÜ      ","        âØã                 âØã      ","                                     ","    anÃ v    v           v   áv\"Ã\"   ","   [nnn                        nnn\"  ","   [nnnÄ                       Änn\"$ ","   [nnnn                       nnnn$ ","    annnv    v           v    vnnna$ ","                             <  &    ","        ÝÞß                 àÞß<     ","        ÛkÜ                <ÛkÜ      ","        ×ØÙ?               <ÚØÙ      ","     > =   Ö>>              > >      ","            Ô  =            <Õ= <    ","   }À    ÑÌÒ{ Ó          <   Y       ","   ÍÎ   ÏYÐÐ  Î             <        ","   =      ÌÌ{  Á         < <    <    ","    <VÊ   ËËÊ Á          <       V   ","     É    Ê  ?                       ","   V È V                       V È V ","         <                           ","     V                           V   ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                            <        ","                                 <   ","                       }     `  =?   ","                            Y~       ","       Y                   =ì  Ê <Á  ","                          {ëì  <     ","                         Éî`è        ","        ñ ñ              Á  ñ ñ      ","         \\                   \\       ","        ñ ñ                 ñ ñ      ","                                     ","    nan                        \"\"a   ","    annn                       nnna$ ","   [annÅ                       Ånna$ ","   [annn                       nnna$ ","    nan                         nan$ ","                             ó? &    ","        ñ ñ                 ñ ñæ     ","      ò  \\                 ó \\       ","      ? ñ ñç               ^ñ ñ>     ","    }À í   ||Î             <ð ð ^    ","    > |  ì  {Ôîï           ÊäÑä ç    ","   ÀÖÔ ÌëìëÌÌ í=         æ   Y       ","   ÎéêYÐÐXèÐY Ô             ä < ?    ","   Í  ÌÌ å{èÌË É         æ ^  ? ^    ","    çÊË   ËËË À          Á ?<        ","    ?Ö Í  Ê=>À?                      ","                            <        ","         æ                           ","                                     ","                                     "],
                ["                                     ","      >                              ","                          >  >       ","         <                           ","                        > ^>ä>Î      ","                           ä     É   ","      <                Í    Ñë  éç   ","       Õ               <   ÏYÐÐ  Ê   ","       Y               <î  {  ëËÊçÉ  ","         >             æ Ê{ÒY ËÊ     ","                        <çéðè   ?    ","     <                   À?ÊËÊç?     ","                          Á  ?       ","      <                              ","                                     ","    annn                       nnna  ","   [nnnn                        (n   ","   [nnnÆ                       Æ(nn$ ","    nnnn                        (nn$ ","    an                          nna$ ","                            ?çÉÁ&    ","        î                 ?  Ê É     ","      Í                    ç  Êç     ","      ÖÊðë |               ÊË ðÔ     ","    ÍÎ Ô YÒ{ÔÎ          << ËÌìè`Ê    ","   =ÎÔ{ðÒì Ô`éíÓ           Ëëìë Ê    ","   ÎÔ`è`ËëË{è éí         ó  ÏYÐÐ     ","   é`ÌXÌÌYèëYÌ`             ôìô é    ","   í `Ì{Ììè`èËÊÖ         ó Ê ìëËÊ?   ","   <çÊË  ìÒðËÊÖ>         É<Êä        ","    ÀÖ Îé ðÊ|ÖÀ                 Á    ","      æ<   <<               Á É?     ","       æ<É?                  ?<?     ","                                     ","                                     "],
                ["                                     ","      }                              ","                          ò= Í       ","         æ<              ==          ","                        }>_{ô{Ô ?>   ","    <<   <<<           >>  ëì Ê  ç   ","  =   Ë                Î  è ìë  `|?  ","       Ñ               _äëYÐYèÐYÒË   ","       X     <         ^éð ÌÒ ëÒðÊÖ  ","   <=<< =|<=ó          ó?|{ÒYÒðË  >  ","    ><<                 óÖéðÒ   À    ","    <ó                   ÀÖ|ðÊçÉ     ","    <    <<               À>>Ö       ","     ?æ  ?                           ","     R                               ","   [ann\"                        nna  ","   [nnn\"                        (n   ","   [nnnÅ                       Å(nn  ","   [nnnn                        (nn  ","    annn                       nnna  ","                           ?çÊÖÀ &   ","       =íÔíÓ              }? ð|ç?    ","      Ó= ËÊ?}              Ê ëË|?    ","      Ö|ðëð|=             <ËÒYëË <   ","    ÍÎ Ô YÌ{Ôíî         óç {ëìëðÊ<   ","   ÍÎÔ{|ðè Ô`éíÓ        <_äÒëëËÒð    ","   ÎÔ`è`ËëË`è`éí         ç YÐYèY  <  ","   é`èYëôYÒëYè`î        ?   ëëËëð    ","   íé`è``è``èË|Ö         ^|ËëìëðÊç>  ","   ÉÖ|Ë`ÌYÒðð|ÖÀ         ÖÊËëY   ?   ","    ÀÖ é{ëð||ÖÀ                ÖÀ    ","      ó^Ê _^^              ÁÉ çÀ     ","       É^çÖ                 }ÉÉ}     ","                                     ","                                     "],
                ["                                     ","     =Í =                            ","      ? ^<                ÍÓ=Îî      ","       ä óæ              ÍÎ  é       ","                        Íç_{ë{Ê çÀ   ","    Éç   çÉÁ<          ÀÍ ËëYè` |Ö   ","  Í  ?ëì?    ?         í ðë`ëð  `|Ö  ","<î     ìë `Ê ?         ÊËëYÒXè YÒð>  ","      ÏY~  Ë ç         çéð {ÒËðÒð|Ö  ","   ÊÔËËåË`äéç?         Éç|ðÒYëððÊ À  ","< ó ÎÊË Ë               ÉÖ|ðÒð |Ö    ","    óç                   ÀÖ|ð|ÖÖ     ","    æ    óæ               ÀÖ|Ö>      ","     ÁÉ  Á                           ","    RR                               ","   [\"nn\"                        nnn  ","   [\"nnÃ                        (n\"  ","   [\"nnÄ                       Ä(n\"  ","    nnnÃ                       Ã(n\"  ","   [nnnn                       nnnn  ","    &                      ÉÖ|ÖÀ &&  ","       ÓíéíÓ              ÀÖ ð|ÖÀ    ","      ÓíéËÊÖÀ              | Òð|ç    ","      Ö|ðÒð|Î            <ÊðÒYÒË ó   ","    ÓíÔ{ÌYÌ{ÔíÓ         Éç|{ðÒðð|ç?  ","   ÍÎÔ{Ô{è`é`ÔÎÍ        ^ÊðÒðëËÒðÊ?  ","   íé`è`é`Ê`è`éí        <Ê YëXÒYëäÊ  ","   é`èYëËÒðÒYè{é        Éç ëËëËëð|>  ","   íé`è``è{{Ì{|í        ?ç|ËðëËð|ÖÀ  ","   ÉÖ|ð`èYëËð|çÀ         Ö|ðÒYÒð À   ","    ÀÖÔé`ëË|ÊçÉ           ?   ð|Ö    ","      ççÊË_çç             >Àç |Ö>    ","       Éç|Ö?                ÀÖçÀ     ","                                     ","                                     "],
                ["                                     ","     ÓÎ í                            ","    < Êä_^<               ÓíÔíÓ      ","     _äô çÉ              Óíé{é?      ","      ëY Ê?             ÍçÊËë{Ê_ÖÀ   "," < ?çÊ ì ÊÖÉÁ          ÍÎ ðÒYèðð|Ö>  "," <í  ËÒìëð  ?É         íéðë`Òð ëð|Ö  ","Éí ËËë  ëëèð|ç         ÊËÒYÒÒË YÒð|  ","?ç   ÐÐXÐÐYÒËÊ         çÔð  ÒððÒð|Ö  ","   Ë`ëëìÒëè`ÊÖ         Éç|ðÌYÒðð|>À  ","Á?ç Ô`ÌìÒ  | ?          ÉÎ|{Ìð||Ö>   ","  ? çÊ Yô  ??            Óíé`|ÖÖ     ","    ó^ ë ^ó               ÉÖ|ÖÀ      ","     Àç  À?                          ","     ?   ?                           ","   [\"nn\"                       nnnn  ","   [\"nn\"                       n(n\"  ","   [\"nnk                       k(n\"  ","   [nnnn                       n(n\"  ","   [\"\"\"n                       nnnn  ","    &&                     ÀÖ|ÖÀ &&  ","       ÓÎéÎÍ              ÀÖ|ð|ÖÀ    ","      ÍíéËÊÖÉ             >|ðÒð|Ö    ","      çÊËÒð|Î            ç|ðÒYÒð É   ","    ÓíÔðÌYÌð|ÖÀ         Éç|ËðÒðð|çÉ  ","   ÉçÊðÔ{Ò`éð|ÖÀ        çÊðÒðÒðÒðÊç  ","   ç|ðÒðé`éðÒð|Ö        ÊËëYÒYÒYëËÊ  ","   |ðÒYÒËððÒYÒð|        çÊËÒËëËÒð|Ö  ","   ÎÔ{è``ÒððÒ{ÔÎ        Éç|ððÒËð|ÖÀ  ","   ÍÎÔ{ËèYÌ{{ÔÎÍ         Ö|ðÒYÒð À   ","    ÍÎéé`ë{ÔÔÎÍ           Ö|ðÒð|Ö    ","      ççÊËÊçç             ÀÖÊð|ÖÀ    ","       Éç|ÖÀ               >Ö|ÖÀ     ","                                     ","                                     "],
                ["                                     ","     Óí í<                           ","    Á<ÊËÊçÉ               ÓíéíÓ      ","    ?ÊËëËÊç              Óíé`éç?     ","    ?äëYÒËÊ             ÀçÊËëËÊÊÖÉ   "," É>Ê|Ê ÒË||ÖÉ          ÍÎ ðÒYÒððÊçÀ  "," çéððððÒð|ð|ÖÀ         ÖéðÒðÒððÒðÊç  ","çéËÒÒë>ëððèð|Ö         |ËÒYÒððÒYëË|  ","ÖÊ YÐÐèXÒÒYÒð|         ÖÊËÒðÒððÒð|Ö  ","  ËÒèè`ÒððÒ`|Ö         ÀÖÊËëYÒðð|ÖÀ  ","ÉçÊ ```Òð|ð|?É          Àç|ðÒð||ÖÀ   ","  ç?ÊËëYÒð çÀ            ÀÖ|ð|ÖÖ     ","    çÊ ëäÊç               ÀÖ|ÖÍ      ","    ?ÖÊðÊÖÉ                          ","     À>??É                           ","    \"nnn                       \"nnn  ","    \"nnn                       \"(n\"  ","    \"nnÄ                       Ä(n\"  ","    nnn\"                       \"(n\"  ","   [\"\"\"\"                       \"nnn  ","    &&                     ÀíéíÓ     ","       ÉçÊçÉ              Óí|`éíÓ    ","      ÉçÊËÊçÉ             ÖéðÒ`éÖ    ","      çÊËëËÊç            ç|`èYÒð|ç   ","    ÉçÊËëYëË|çÉ         Óç|ðËëðËÊçÉ  ","   ÉçÊð|ðÒð|ðÊçÉ        çÊðÒðððÒðÊç  ","   çÊËÒð|ð|ðÒËÊç        ÊËëYÒÒÒYëË|  ","   ÊËëYÒ{{{ÌYëËÊ        Ö|ðÒðððÒð|Ö  ","   çÊËëËËëËËëËÊç        ÉÖÔððÒðð|ÖÀ  ","   ÉçÊ``ëYëËËÊçÉ         Öé`ÒYÒð|Ö   ","    ÀÖé|ðÒËÊ|ÖÀ           Ö|ðÒðÊç    ","      ÖÖ|ËÊçÖ             Àç|ðÊçÀ    ","       Àç|ÖÀ               ÀÖ|ÖÀ     ","                                     ","                                     "],
                ["                                     ","     ÓíîíÉ                           ","    ÉçÊËÊçÉ               ÓíéíÓ      ","    çÊËëËÊç              Óíé`éçç     ","    ÊËëYÒð|             ÀíÊËëËÊÊíÓ   "," ÉÖ|Ö|ðÒð||ÖÀ          ÀÖÊðÒYÒððéíÓ  ",">çéð|||ð||ð|ÖÀ         Ö|ðÒðÒððÒËÊç  ","ÖéËÒðððÒððëð|Ö         |ðÒYÒððÒYëËÊ  ","|ðÒYÒèèYÒÒYÒð|         Ö|ðÒðð|ðëËÊç  ",">ÊðÒ```ÒððÒË|Ö         ÀÖ|ððëËÊËÊÖÀ  ","ÀÖ| éé`Òð|ð|ÖÀ          ÍÖ||ð|ÎÔÎÍ   ","  ÖÖÊËëYÒð ÖÀ            ÀÖÖ|ÖÀÖ     ","    çÊËëËÊç               ÀÀÖÀ}      ","    ÀÖÊð|ÖÀ                          ","     ÀÖ|ÖÀ                           ","    nnnn                       \"\"\"\"  ","    \"nnn                       \"(nn  ","    \"nnÅ                       Å(n   ","    \"nn\"                       \"(n   ","    \"  \"                       \"nnn  ","                           ÉçÊçÉ     ","       }ÀÖÀ}              ÀÖ|ð|ÖÀ    ","      }ÀÖ|ÖÀ}             Ö|ðÒð|Ö    ","      ÀÖ|ð|ÖÀ            Ö|ðÒYÒð|í   ","      Ö|ðÒð|Ö           ÍÎ|{{Ì{{ÔíÓ  ","     ç|Ö|ð|Ö|ç          ÎÔ{Ì{{{Ì{éí  ","    çÊð|Ö|Ö|ðÊç         Ô{ÌYÌ{ÌYè`é  ","    ÊËëð|ð|ðëËÊ         ÎÔËÒ```è`Êç  ","    çÊð|ðÌËÊËÊç         ÍÎ|ðËëËËÊçÉ  ","     çÊËëYëËÊç           Î|ðÒYÒð|Î   ","      çÊËëËÊç             ÎÔ{Ì{ÔÎ    ","      ÉçÊËÊçÀ             ÍÎÔ{ÔÎÍ    ","       ÀÖÔÎÍ               ÍÎÔÎÍ     ","                                     ","                                     "],
                ["                                     ","     ÉçéçÉ                           ","    ÉçÊËÊçÉ               ÍÎÔÎÍ      ","    çÊËëËÊç              ÍÎÔ{ÔÎÍ     ","    ÊËëYëð|             ÀÎÔ{Ì{ÔÎÉÁ   "," ÀÖ|ç|ðëðÊÊçÀ          ÀÖÔ{ÌYÌ{ÔçÉÁ  ","ÀÖÊð|çÊËÊÊðÊÖÀ         ÀÖÔ{{Ì{Ô{ÊçÉ  ","ÖÊðÒð||ð|ðÒËÊÖ         Ö|{Ì{{Ô{ÌËÊç  ","|ðÒYÒ``ÒËëYëËÊ         ÀÖ|{ÔÔÎÔËÊçÉ  ","Ö|ðÒ{ÔÔËÊËëðÊç         }ÀÖééð|Ö|ÖÀ}  ","ÀÖ|ðéé`ÒË|ðÊÖÀ          }ÀççÊÖÀÖÀ}   "," >Ö|ÊËÒYëË|ÖÀ              ÉçÉ       ","    Ö|ËëË|Ö                          ","    ÀÖ|ð|ÖÀ                          ","     ÀÖ|ÖÀ                           ","    nnn\"                       \"\"    ","    \"nn\"                       \"(n   ","    \"nnÆ                       Æ(n   ","    \"nn\"                       \"(nn  ","    nn \"                       \"nnn  ","                           ÍÎÔÎÍ     ","                          Ííé`éíÉ    ","        ÉçÉ               çÊËëË|Ö    ","       ÉçÊçÉ             ç|{ÌYÌ{Ôí   ","       çÊËÊç            ÍÎé``è``éçÉ  ","       ÉçÊçÉ            ÎÔ`è```è`Êç  ","      _íÉçÉí_           Ô{ÌYè`ëYëËÊ  ","     _`éíéí_ä_          ÎÔ{ÌËËËëËÊç  ","      éíé`éç_           Óíé`ËëËËÊçÉ  ","      çÊËëËÊç            íé`èYÒð|Ö   ","      ÉçÊð|ÖÀ             çÊËÒð|Ö    ","      }ÀÖ|ÖÀ}             ÀÖ|ð|ÖÀ    ","       }ÀÖÀ}               ÀÖ|ÖÀ     ","                                     ","                                     "],
                ["                                     ","     ÉçÊçÉ                           ","    ÉçÊËÊçÉ               ïÓíÓï      ","    çÊËÒð|Ö              ïÓíéíÓï     ","    |ðÒYÌ{Ô              Óíé`éíÓ     "," ÀÖ|ÎÔ{Ì{ÔÔçÀ            íé`è`éçÉ    ","ÀÖ|`ÔÎÔ{ÔÔ{|ÎÍ          ÍçÊÊËÊçÊçÉ   ","í|ðè`ÔÎÔÔ{Ì{ÔÎ          çÊËÊÊçÊËÊç   ","é`ÒYëð|{{ÌYÌ{Ô          ÉçÊÖÖÀÖÊçÉ   ","Ö|ðÒ{ÔÔ{Ô{Ì{ÔÎ           Éç^_^ÉçÉ    ","ÀÖ|ðÔÔ{Ì{Ô{ÔÎÍ              ^        "," ÀÖ|Ô{ÌYÌ{ÔÎÍ                        ","    ÎÔ{Ì{ÔÎ                          ","    ÍÎÔ{ÔÎÍ                          ","     ÍÎÔÎÍ                           ","    nnn\"                       n\"\"\"  ","    \"nn\"                       n(nn  ","    \"nnÅ                       Å(nn  ","    \"nnn                       n(n   ","    nn n                        nnn  ","                                     ","                            çÊç      ","                           çÊËÊç     ","         ^                 ÊËëËÊ     ","        ^_^               íÊÊËÊÊí    ","         ^               íé`ÊÊÊ`éí   ","                         é`è`é`è`é   ","        ÉçÉ              íé`ÔéÊËÊç   ","       ÉçÊçÉ              íÔÔ{ÊÊç    ","       çÊËÊç               Ô{è`é     ","       ÉçÊçÉ               íé`éí     ","        ÉçÉ                 íéí      ","                                     ","                                     ","                                     "],
                ["                                     ","     ÍÎÔÎÍ                           ","    ÍÎÔ{ÔÎÍ                          ","    ÎÔ{èËÊç                ÓíÉ       ","    ÊðÒYÒð|               ÉçÊçÉ      "," ÀÖ|Ö|ðÒð|ÖÓï             çÊËÊç      ","ÀÖ|ð|Ö|ð|Ö|íÓï            ççÊçÉ^     ","Ö|ðÒð|Ö|Ö|`éíÓ           ^_ççÉ^_^    ","|ðÒYÌ`ééÊËëËÊç            ^    ^     ","ÎÔ{ÌËÊçÊçÊËÊçÀ                       ","ÍÎÔ{ÊçÊð|Ö|ÖÀ}                       "," ÍÎÔçÊËëð|ÖÀ}                        ","    ÉçÊËÊÖÀ                          ","    }ÀÖ|ÖÀ}                          ","     }ÀÖÀ}                           ","    nnn\"                       nnnn  ","    nnnÃ                       Ã(nn  ","    nnnÄ                       Ä(nn  ","     nnÃ                       Ã(n   ","    nnnn                       nnnn  ","                                     ","                                     ","                             Ô       ","                            Ô{Ô      ","                             Ô       ","                           Ô   _     ","                          _ä_ _ä_    ","                           _   _     ","         Î                   _       ","        Î_^                 _ä_      ","         ^                   _       ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","      çÊç                            ","     çÊËÊç                           ","     ÊËëËÊ                  ^        "," ÓíéíçÊËÊç                 ^_^       ","Óíé`éíçÊçÉçÉ                ^        ","íéËëËÊç ÉçÊçÉ                        ","ÊËëYëËÊ çÊËÊç                        ","çÊðÒð|ÎÎÉçÊçÉ                        ","ÀÖ|ð|ÎÎÔÎÉçÉ                         "," ÀÖ|Öíé`éí                           ","     ÉçÊçÉ                           ","      ÉçÉ                            ","                                     ","    nnnn                       \"\"\"n  ","    nnnn                       n(nn  ","     nnÄ                       Ä(n   ","    nnnn                       n(nn  ","    \"\"\"n                        nnn  ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","       Ô                             ","      Ô{Ô                            ","       _                             ","  íéí                                "," íé`éí    ^                          "," é`è`é   ^_^                         "," íé`éí    ^                          ","  çÊç  ^                             ","      ^_^                            ","       ^                             ","                                     ","                                     ","    nnnnn                     n\"\"\"n  ","     nnnn                     nn(n\"  ","     nnnÄ                     Än(n\"  ","    nnnnn                     nn(n\"  ","    \"\"\"nn                        nn  ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","   _                                 ","  _ä_                                ","   _                                 ","                                     ","                                     ","                                     ","                                     ","                                     ","     nn                       n  \"n  ","     nnnn                     nnnn\"  ","     nnnÅ                     Ån(n\"  ","    nnnnn                     nn(n\"  ","    \"\"\"nn                     nn  n  ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","    nnn                       nn  n  ","    \"nnnnn                   nnnnn\"  ","    \"nnnnÄ                   Änn(n\"  ","    \"nnnn\"                   nnn(n\"  ","    nnnnn                     nnnnn  ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","     nnn n                   nnn n   ","    \"nnnnn                   nnnn\"n  ","    \"nnnnÅ                   Ånnn\"n  ","    \"nnnn\"                   nnnn\"n  ","     nnnn\"                   nnnnn   ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","     nnnn\"\"                 n\"\"\"nn   ","     nnnn\"\"                 nnnnn\"   ","     nnnn\"Ä                 Än(n(\"   ","     nnnnnn                 nn(n(\"   ","     nnnnnn                 \"\"\"nnn   ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","       nnnnn               \"n\"\"\"n    ","     nnnnnnn               \"nnnnn\"   ","     nnnn nÄ               Ännnnn\"   ","     nnnn nn               nnnnnn\"   ","      nn   n#             #n\"\"\"nn    ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","        nn \"\"             n\"n\" \"n    ","       \"nnn(\"             n\"nnnnn    ","      n\"nnn(Ä             Ännnnn     ","      n\"nnn(n             nnnnnn     ","      nn\"  nn             nn\"\"\"n     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","        n\"   \"          nn\"\"\" nn     ","       \"nnnnnnn         nnnnnnnn     ","       \"nnnnnÅÄ         ÄÅnnnnn      ","       \"nnnnnnn         nnnnnnnn     ","       n\"\"\"\"\"\"           \"\"nnnnn     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","        n\"\"\"n\"\"\"n     nnnn\"\"\"nn      ","       \"nnn(nnnnÃÃ\"\"\"ÃÃnnnnnnn\"\"     ","       \"nnn(nnnÄÅÅÄkÄÅÅÄnnnnnn\"      ","       \"nnn(nnnnÃÃ\"\"\"ÃÃnnnnnnn\"      ","        nnn\"\"\"n n     nn\"\"\"nnnn      ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","         \"\"\"n  \"nnn n\"\"\"nn\" \"        ","        nn\"nnnnnn((((((nnnnnnnn      ","        nn\"nnnnnn((((((nnnnnnnn      ","        nn\"nnnnn ((((((nnnnnnnn      ","         nn\"\"\"    \"nn\"\"\"\"\"\" nn       ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","          nn  nn\"\"  n\"  nnnn         ","          \"(n((((((((nnnnnnnn        ","          \"(n((((((((nnnnnnnn        ","          \"(n((((((((nnnnnnnn        ","          nnnnnn\"\"\"nn\"\"\"n   n        ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","            nnnn\"\"\" n  \"nnn          ","           nn\"nnnnn(nnnnnnnn         ","           nn\"nnnnn(nnnnnnnn         ","           nn\"nnnnn(nnnnnnnn         ","            nnnn\"\"\"nn\"\"\"nn           ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "],
                ["                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","              nn\"\"\"nn nn\"            ","             \"n\"\"\"nnn  n \"           ","             \"n\" \"nnn\" \"\"\"           ","             \"n\" \"  n\" \"nn           ","              nnn   n\"\"\"n            ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     ","                                     "]
            ])
            .keys({
                "a": [
                    "modular_machinery_reborn:casing_reinforced"
                ],
                "b": [
                    "modular_machinery_reborn:casing_plain",
                    '#modular_machinery_reborn_ars:sourcehatch',
                    '#modular_machinery_reborn:fluidhatch',
                    '#modular_machinery_reborn:itembus',
                    '#modular_machinery_reborn:energyinputhatch',
                    '#modular_machinery_reborn:parallelhatch'
                ],
                "c": [
                    "malum:twisted_rock"
                ],
                "d": [
                    "malum:twisted_rock"
                ],
                "e": [
                    "malum:soulwood_boards"
                ],
                "f": [
                    "malum:twisted_rock"
                ],
                "g": [
                    "malum:twisted_rock"
                ],
                "h": [
                    "malum:blighted_earth"
                ],
                "i": [
                    "malum:mass_of_blighted_gunk"
                ],
                "j": [
                    "malum:twisted_rock"
                ],
                "k": [
                    "eternalores:cosmic_matter_block"
                ],
                "l": [
                    "malum:tainted_rock"
                ],
                "n": [
                    "minecraft:polished_blackstone_bricks"
                ],
                "o": [
                    "malum:twisted_rock"
                ],
                "p": [
                    "malum:twisted_rock"
                ],
                "q": [
                    "malum:soulwood_boards"
                ],
                "r": [
                    "malum:twisted_rock"
                ],
                "s": [
                    "malum:blightpearl"
                ],
                "t": [
                    "malum:blighted_growth"
                ],
                "u": [
                    "malum:blightroot"
                ],
                "v": [
                    "chipped:burning_coal_lantern[hanging=false,waterlogged=false]"
                ],
                "w": [
                    "malum:brilliant_obelisk[waterlogged=false]"
                ],
                "x": [
                    "malum:runewood_obelisk[waterlogged=false]"
                ],
                "y": [
                    "malum:tainted_rock_column[axis=y]"
                ],
                "z": [
                    "malum:twisted_rock"
                ],
                "A": [
                    "malum:clinging_blight[blight_type=soulwood_roots,facing=west]"
                ],
                "B": [
                    "malum:clinging_blight[blight_type=soulwood_roots,facing=north]"
                ],
                "C": [
                    "malum:soulwood_boards_wall"
                ],
                "D": [
                    "malum:soulwood_boards_wall"
                ],
                "E": [
                    "malum:soulwood_boards_wall"
                ],
                "F": [
                    "malum:clinging_blight[blight_type=clinging_blight,facing=east]"
                ],
                "G": [
                    "malum:soulwood_boards_wall"
                ],
                "H": [
                    "malum:clinging_blight[blight_type=soulwood_roots,facing=south]"
                ],
                "I": [
                    "malum:blighted_soulwood"
                ],
                "J": [
                    "malum:soulwood_boards_wall"
                ],
                "K": [
                    "malum:clinging_blight[blight_type=clinging_blight,facing=north]"
                ],
                "L": [
                    "malum:clinging_blight[blight_type=clinging_blight,facing=south]"
                ],
                "M": [
                    "minecraft:blackstone"
                ],
                "N": [
                    "malum:tainted_rock"
                ],
                "O": [
                    "malum:clinging_blight[blight_type=soulwood_roots,facing=east]"
                ],
                "P": [
                    "malum:clinging_blight[blight_type=clinging_blight,facing=west]"
                ],
                "Q": [
                    "malum:blight"
                ],
                "R": [
                    "malum:blight"
                ],
                "S": [
                    "minecraft:blackstone"
                ],
                "T": [
                    "malum:tainted_rock"
                ],
                "U": [
                    "malum:twisted_rock_column[axis=y]"
                ],
                "V": [
                    "malum:brilliant_obelisk_component"
                ],
                "W": [
                    "malum:runewood_obelisk_component"
                ],
                "X": [
                    "malum:exposed_soulwood_log"
                ],
                "Y": [
                    "malum:soulwood_log"
                ],
                "Z": [
                    "malum:blight"
                ],
                "!": [
                    "malum:blight"
                ],
                "\"": [
                    "malum:twisted_rock_bricks"
                ],
                "#": [
                    "chipped:burning_coal_lantern[hanging=true,waterlogged=false]"
                ],
                "$": [
                    "malum:blight"
                ],
                "%": [
                    "malum:blight"
                ],
                "&": [
                    "malum:blight"
                ],
                "'": [
                    "malum:twisted_rock_bricks_wall"
                ],
                "(": [
                    'minecraft:polished_blackstone_bricks'
                ],
                ")": [
                    "malum:twisted_rock_bricks_wall"
                ],
                "*": [
                    "malum:twisted_rock_bricks_wall"
                ],
                "+": [
                    "malum:twisted_rock_bricks_wall"
                ],
                ",": [
                    "malum:blight"
                ],
                "-": [
                    "malum:runic_tainted_rock_bricks"
                ],
                ".": [
                    "malum:twisted_rock_bricks_slab[type=top,waterlogged=false]"
                ],
                "/": [
                    "malum:runic_tainted_rock_bricks_slab[type=top,waterlogged=false]"
                ],
                ":": [
                    "malum:tainted_rock_bricks"
                ],
                ";": [
                    "malum:tainted_rock_column_cap[facing=up]"
                ],
                "<": [
                    "malum:hanging_soulwood_leaves[color=4,waterlogged=false]"
                ],
                "=": [
                    "malum:hanging_soulwood_leaves[color=1,waterlogged=false]"
                ],
                ">": [
                    "malum:hanging_soulwood_leaves[color=2,waterlogged=false]"
                ],
                "?": [
                    "malum:hanging_soulwood_leaves[color=3,waterlogged=false]"
                ],
                "@": [
                    "malum:blight"
                ],
                "[": [
                    "malum:blight"
                ],
                "\\": [
                    "malum:gilded_runewood_item_pedestal[waterlogged=false]"
                ],
                "]": [
                    "malum:arcana_pylon[waterlogged=false]"
                ],
                "^": [
                    "malum:soulwood_leaves[color=4,distance=4,persistent=false,waterlogged=false]"
                ],
                "_": [
                    "malum:soulwood_leaves[color=4,distance=3,persistent=false,waterlogged=false]"
                ],
                "`": [
                    "malum:soulwood_leaves[color=0,distance=2,persistent=false,waterlogged=false]"
                ],
                "{": [
                    "malum:soulwood_leaves[color=1,distance=2,persistent=false,waterlogged=false]"
                ],
                "|": [
                    "malum:soulwood_leaves[color=2,distance=3,persistent=false,waterlogged=false]"
                ],
                "}": [
                    "malum:soulwood_leaves[color=2,distance=6,persistent=false,waterlogged=false]"
                ],
                "~": [
                    "malum:clinging_blight[blight_type=hanging_blight,facing=south]"
                ],
                "À": [
                    "malum:soulwood_leaves[color=2,distance=5,persistent=false,waterlogged=false]"
                ],
                "Á": [
                    "malum:soulwood_leaves[color=3,distance=6,persistent=false,waterlogged=false]"
                ],
                "Â": [
                    "malum:twisted_rock_bricks_wall"
                ],
                "Ã": [
                    "malum:chiseled_twisted_rock"
                ],
                "Ä": [
                    "eternalores:stellarium_block"
                ],
                "Å": [
                    "minecraft:reinforced_deepslate"
                ],
                "Æ": [
                    "eternalores:spectral_sky_bluerite_block"
                ],
                "Ç": [
                    "malum:clinging_blight[blight_type=soulwood_spike,facing=east]"
                ],
                "È": [
                    "malum:arcana_pylon_component"
                ],
                "É": [
                    "malum:soulwood_leaves[color=3,distance=5,persistent=false,waterlogged=false]"
                ],
                "Ê": [
                    "malum:soulwood_leaves[color=3,distance=3,persistent=false,waterlogged=false]"
                ],
                "Ë": [
                    "malum:soulwood_leaves[color=3,distance=2,persistent=false,waterlogged=false]"
                ],
                "Ì": [
                    "malum:soulwood_leaves[color=1,distance=1,persistent=false,waterlogged=false]"
                ],
                "Í": [
                    "malum:soulwood_leaves[color=1,distance=5,persistent=false,waterlogged=false]"
                ],
                "Î": [
                    "malum:soulwood_leaves[color=1,distance=4,persistent=false,waterlogged=false]"
                ],
                "Ï": [
                    "malum:clinging_blight[blight_type=hanging_blight,facing=north]"
                ],
                "Ð": [
                    "malum:soulwood_log"
                ],
                "Ñ": [
                    "malum:clinging_blight[blight_type=hanging_blight,facing=west]"
                ],
                "Ò": [
                    "malum:soulwood_leaves[color=2,distance=1,persistent=false,waterlogged=false]"
                ],
                "Ó": [
                    "malum:soulwood_leaves[color=0,distance=5,persistent=false,waterlogged=false]"
                ],
                "Ô": [
                    "malum:soulwood_leaves[color=1,distance=3,persistent=false,waterlogged=false]"
                ],
                "Õ": [
                    "malum:clinging_blight[blight_type=soulwood_spike,facing=west]"
                ],
                "Ö": [
                    "malum:soulwood_leaves[color=2,distance=4,persistent=false,waterlogged=false]"
                ],
                "×": [
                    "minecraft:blackstone"
                ],
                "Ø": [
                    "minecraft:blackstone"
                ],
                "Ù": [
                    "minecraft:blackstone"
                ],
                "Ú": [
                    "minecraft:blackstone"
                ],
                "Û": [
                    "minecraft:blackstone"
                ],
                "Ü": [
                    "minecraft:blackstone"
                ],
                "Ý": [
                    "minecraft:blackstone"
                ],
                "Þ": [
                    "minecraft:blackstone"
                ],
                "ß": [
                    "minecraft:blackstone"
                ],
                "à": [
                    "minecraft:blackstone"
                ],
                "á": [
                    "malum:blight"
                ],
                "â": [
                    "minecraft:blackstone"
                ],
                "ã": [
                    "minecraft:blackstone"
                ],
                "ä": [
                    "malum:soulwood_leaves[color=4,distance=2,persistent=false,waterlogged=false]"
                ],
                "å": [
                    "malum:clinging_blight[blight_type=hanging_blight,facing=east]"
                ],
                "æ": [
                    "malum:soulwood_leaves[color=4,distance=6,persistent=false,waterlogged=false]"
                ],
                "ç": [
                    "malum:soulwood_leaves[color=3,distance=4,persistent=false,waterlogged=false]"
                ],
                "è": [
                    "malum:soulwood_leaves[color=0,distance=1,persistent=false,waterlogged=false]"
                ],
                "é": [
                    "malum:soulwood_leaves[color=0,distance=3,persistent=false,waterlogged=false]"
                ],
                "ê": [
                    "malum:clinging_blight[blight_type=soulwood_spike,facing=north]"
                ],
                "ë": [
                    "malum:soulwood_leaves[color=3,distance=1,persistent=false,waterlogged=false]"
                ],
                "ì": [
                    "malum:soulwood_log"
                ],
                "í": [
                    "malum:soulwood_leaves[color=0,distance=4,persistent=false,waterlogged=false]"
                ],
                "î": [
                    "malum:hanging_soulwood_leaves[color=0,waterlogged=false]"
                ],
                "ï": [
                    "malum:soulwood_leaves[color=0,distance=6,persistent=false,waterlogged=false]"
                ],
                "ð": [
                    "malum:soulwood_leaves[color=2,distance=2,persistent=false,waterlogged=false]"
                ],
                "ñ": [
                    "malum:gilded_runewood_item_stand[facing=up,waterlogged=false]"
                ],
                "ò": [
                    "malum:soulwood_leaves[color=1,distance=6,persistent=false,waterlogged=false]"
                ],
                "ó": [
                    "malum:soulwood_leaves[color=4,distance=5,persistent=false,waterlogged=false]"
                ],
                "ô": [
                    "malum:soulwood_leaves[color=4,distance=1,persistent=false,waterlogged=false]"
                ]
            })
        )
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/