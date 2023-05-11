const qnaList = [
  {
    q: "1. 당신의 장례식에 얼마나 많은 사람이 올까요?",
    a: [
      { answer: "나름 인싸라서 많이 올 것 같아요!" },
      { answer: "...딱히 많고 적은 건 중요하지 않아요." },
    ],
  },
  {
    q: "2. 방금 가족을 만나고 온 당신. 친구에게 내일 만나자는 연락이 왔어요.",
    a: [
      { answer: "내일도 외출하기 힘들어요. 좋게 거절해요." },
      { answer: "좋아! 어디서 만날까!?" },
    ],
  },
  {
    q: "3. 이번 생은 어떤 사람으로 기억되고 싶나요?",
    a: [{ answer: "재미있고 유쾌한 사람" }, { answer: "차분하고 친절한 사람" }],
  },
  {
    q: "4. 죽기 전 당신의 눈 앞에 보이는 것은?",
    a: [
      { answer: "영적인 존재나 천국, 지옥" },
      { answer: "...그쯤 되면 헛 것이 보이지 않을까요?" },
    ],
  },
  {
    q: "5. 당신은 전생을 믿나요?",
    a: [{ answer: "네! 너무 흥미로워요." }, { answer: "그런 거 안 믿어요." }],
  },
  {
    q: "6. 죽음은 어떤 느낌일까요?",
    a: [
      { answer: "슬프거나 홀가분할 것 같아요." },
      { answer: "아직 안 죽어봐서 모르겠어요." },
    ],
  },
  {
    q: "7. 만나기로 한 친구가 30분 넘게 늦게 왔어요.",
    a: [
      { answer: "무슨 일 있었어? 어디 아픈 거 아니지?" },
      { answer: "왜 늦었어? 아니 그러니까 왜 늦었냐고." },
    ],
  },
  {
    q: "8. 친구가 뭘 봤는지 죽음이 무섭지 않냐고 물어요.",
    a: [
      { answer: "사실 나는 쫌 무서워..." },
      { answer: "어처피 인간은 다 죽어." },
    ],
  },
  {
    q: "9. 내가 죽었을 때 호상이라는 사람들이 있다면?",
    a: [
      { answer: "사람이 죽었는데 뭐가 호상이야? 너도 죽을래?" },
      { answer: "아프거나 안 좋은 모습으로 죽진 않았다면 그럴 수도?" },
    ],
  },
  {
    q: "10. 정확하게 언제 죽는지 날짜를 알게 됐어요.",
    a: [
      { answer: "인생 뭐 있어! 죽기 전까지 정신없이 놀래요." },
      { answer: "그 때까지 어떻게 살지 계획을 짤래요." },
    ],
  },

  {
    q: "11. 죽기 전 날 배가 고픈 당신의 저녁 메뉴는?",
    a: [
      { answer: "유종의 미를 거두자! 항상 갔던 맛집에 가요." },
      { answer: "이럴 때야 말로 새로운 도전! 새로운 곳에 가요." },
    ],
  },
  {
    q: "12. 죽기 마지막 순간 당신의 소중한 사람들에게...",
    a: [
      { answer: "손을 잡거나 마지막으로 하고 싶은 말을 할래요." },
      { answer: "미리 적어둔 편지를 전달하거나 읽어보라고 할래요." },
    ],
  },
];

const infoList = [
  {
    mbti: "ENFP",
    name: "어느 여름 <br> 농구장의 농구공",
    img_src: "ENFP.jpeg",
    desc: "통통 튀는 매력을 가진 당신! <br><br> 언제나 밝고 감정 표현이 풍부해 사람들에게 인기가 많아요. 인기가 많은 만큼 사람들의 사랑과 인정을 독차지 하고 싶어하는 욕구도 강하죠. 하지만 사람을 좋아하고 감성적인 당신도 상처를 받을 때가 있어요. 그럴 땐 한없이 자기혐오와 우울에 빠지지만, 금세 회복해 어린 아이처럼 천진난만한 것이 당신의 강점이에요.",
    like: "활동적인 것 <br> 재미있고 자극적인 것 <br> 사람! 그리고 사람!",
    hate: "틀에 박히고 지루한 것 <br> 하기 싫은 것 <br> 노잼",
    good: "아이폰13 <br> 선인장",
    bad: "선글라스 <br> 무알콜 맥주",
  },
  {
    mbti: "ENFJ",
    name: "중세시대 <br> 사람들의 믿음을 받는 십자가",
    img_src: "ENFJ.jpeg",
    desc: "사람들을 따스하게 이끄는 당신! <br><br> 눈치가 빠르고 사람들에게 헌신적이라 당신을 따르는 사람들이 많아요. 자신의 영향력으로 세상을 바꾸고자 하고, 그럴 만한 힘을 가지고 있어요. 공동의 선을 지향하고 사람들에게 관심이 많아 가끔 오지랖 넓다는 소리를 듣기도 하지만... 어쩌겠어요! 어린 양들을 잘 돌보는 게 당신이 생각한 당신의 일인걸요.",
    like: "가치 있는 것 <br> 자기 발전 <br> 정의로운 것",
    hate: "남을 비난하는 것 <br> 경쟁하는 것 <br> 분란, 폭력",
    good: "아이폰13 <br> 농구공",
    bad: "초대장 <br> 뿌리 깊은 나무",
  },
  {
    mbti: "ENTJ",
    name: "중세시대 <br> 카리스마 있는 기사단장의 칼",
    img_src: "ENTJ.jpeg",
    desc: "태생이 리더인 당신! <br><br> 카리스마 있는 모습으로 사람들을 리드해요. 야망이나 성공이라는 단어를 좋아하고, 목표를 향해 꼼꼼하게 계획하고 거침없이 도전해요. 자신감, 자존감, 자기주장 삼박자가 강한 인물이에요. 물론 결과지향적인 사고와 다소 낮은 공감능력은 가끔 주변 사람들에게 상처를 입히기도 하지만... 내 편이 될 땐 한없이 든든한 행동파죠!",
    like: "나보다 똑똑한 사람 <br> 혁신, 새로운 것 <br> 성공야망성공야망!",
    hate: "무능한 사람 <br> 비효율, 시간 낭비 <br> 고여 있는 것, 개꼰대",
    good: "한 철의 꽃 <br> 전구",
    bad: "단단한 집 <br> 불빛",
  },
  {
    mbti: "ENTP",
    name: "옛날 옛적 <br> 위풍당당한 왕의 왕관",
    img_src: "ENTP.jpeg",
    desc: "혁명가 기질이 다분한 당신! <br><br> 언변이 뛰어나고 모든 말에 설득력이 있어요. 논리적인 비판이라면 쿨하게 수긍하지만 비약이 있다면 가만 두지 않아요. '내 말이 맞지'가 입버릇인 당신은 재치있고 넉살이 좋아 미워할래야 미워할 수 없는 인물이죠. 당신이 '왜?'라고 물을 땐 정말 궁금해서인데, 비꼬는 거냐는 말을 들을 때는 조금 억울하기도 해요.",
    like: "나! <br> 싸워 이기는 것 <br> 발표, 토론(에서 짱 먹은 나!)",
    hate: "무지성 무논리 <br> 감정에 호소하는 것 <br> 그러러니 해야 하는 것",
    good: "선인장 <br> 농구공",
    bad: "뿌리 깊은 나무 <br> 초대장",
  },
  {
    mbti: "INFJ",
    name: "그 언젠가 <br> 아주 오래된 선인장",
    img_src: "INFJ.jpeg",
    desc: "성숙하고 신비로운 당신! <br><br> 누구에게나 친절하지만 늘 선이 있어요. 그래서 선을 넘거나 너무 가까이 다가오면 가시에 찔리고 말아요. 당신은 평판을 의식하거나 감정을 드러내기 귀찮거나... 모종의 이유로 겉과 속, 친해지기 전후가 드라마틱하게 다른 편이에요. 또 항상 생각이 많아 모든 언행이 조심스럽고 다가가기 전에 대상을 한참을 관찰해요. 그래서 사람 보는 눈이 좋죠. 당신의 매력은 이런 섬세함과 신중함 아닐까요?",
    like: "심리학, 인문학 <br> 예의 바른 사람 <br> 조용하고 편안한 곳",
    hate: "민폐 끼치는 사람 <br> 선 넘는 사람 <br> 다 보이는 가식, 거짓말",
    good: "농구공<br> 왕의 왕관",
    bad: "영어 단어장 <br> 디자이너의 가위",
  },
  {
    mbti: "INFP",
    name: "1년 전 <br> 피어난 한 철의 꽃",
    img_src: "INFP.jpeg",
    desc: "손 대면 톡 터질 것 같은 당신! <br><br> 감수성이 예민해 쉽게 상처를 받는 당신. 하지만 당신은 그런 점까지 고려해 사람들을 대하는 섬세함을 가졌어요. 내성적이라 단체 생활보다는 혼자 있는 시간이 편하고, 주목 받는 게 불편하지만 한편으론 사람들과 친해지고 중심이 되고 싶다는 생각을 하곤 해요. 마음을 열기 어렵지만 한 번 열면 뿌리를 내리고 매력을 잔뜩 발산하는 당신은 한 송이 꽃 같아요.",
    like: "이야기거리(책, 영화 등) <br> 디테일하거나 낭만적인 공상 <br> 주목 받는 것",
    hate: "까칠하고 냉정한 것 <br> 시끄럽고 사람 많은 곳(ex.러쉬) <br> 주목 받는 것",
    good: "십자가 <br> 기사단장의 칼",
    bad: "아이폰13 <br> 단단한 집",
  },
  {
    mbti: "INTJ",
    name: "2021년 <br> 출시된 아이폰13",
    img_src: "intj.jpeg",
    desc: "진리와 진실을 추구하는 지적인 당신! <br><br> 이성을 바탕으로 사고하기 때문에 주변 사람들로부터 기계 같다는 말을 많이 들어요. 특히 감정적이고 비합리적인 것을 잘 이해하지 못해 무자비한 팩폭러 같지만, 그렇기 때문에 누구보다 날카롭고 통찰력 있는 풍자를 잘 하는 편이에요. 항상 지식에 목말라 있는 당신은 계속해서 업그레이드 하는 스마트폰과 같네요!",
    like: "독서나 체스 등 머리 쓰는 일 <br> 탄탄한 전략과 완벽한 계획 <br> 동물이나 귀여운 것(인간 아닌 것)",
    hate: "멍청한 사람 <br> 멍청한데 고집까지 센 사람 <br> 멍청한데 고집세고 일도 못하는 사람",
    good: "농구공 <br> 왕의 왕관",
    bad: "불빛 <br> 초대장",
  },
  {
    mbti: "INTP",
    name: "1905년 <br> 천재 과학자 방의 전구",
    img_src: "intp.jpeg",
    desc: "고독과 공상을 즐기는 논리적인 당신! <br><br> 사람들과 있는 것보다 혼자 이런저런 상상을 하는 게 더 즐거워요. 사람들이랑 있으면 공감에 감정표현에 리액션까지 너무 할 게 많거든요... 당신은 지적 호기심이 높아 인간은 왜 사는지, 우주는 왜 이리 신비로운지 추상적이고 논리적인 분야에 관심이 많아요. 이 세상에 배울 게 너무 많아 다른 건 신경 쓸 여유가 없네요!",
    like: "우주, 수학, 과학 <br> 나를 이해해주는 소수 <br> 똑똑한 사람",
    hate: "대부분의 인간 <br> 시끄럽고 사람 많은 곳 <br> 멍청하거나 비논리적인 것",
    good: "십자가 <br> 기사단장의 칼",
    bad: "전구 <br> 선글라스",
  },
  {
    mbti: "ISFJ",
    name: "전기가 없던 시절의 불빛",
    img_src: "isfj.jpeg",
    desc: "어둠 속 한 줄기 빛과도 같은 당신! <br><br> 다정다감하고 사람의 감정을 잘 파악하는 센스 있는 성격이라, 주변 사람들이 많이 의지하는 스타일이에요. 내 사람들을 잘 챙기는 따스함이 장점이지만 너무 착해서 싫은 소리를 잘 못하는 게 유일한 단점이죠. 당신의 배려가 배려로 돌아오지 않을 때 속앓이를 많이 하는 당신. 당신의 불이 꺼지지 않게 주변 사람들! 예의는 꼭 지켜주세요 :)",
    like: "귀여운 것 <br> 기브 앤 테이크 <br> 안정적인 것",
    hate: "호의를 당연시 여기는 것 <br> 빠르게 변하는 상황 <br> 도전",
    good: "왕의 왕관 <br> 무알콜 맥주",
    bad: "단단한 집 <br> 아이폰13",
  },
  {
    mbti: "ISFP",
    name: "언제 지어졌는지 모를 단단한 집",
    img_src: "isfp.jpeg",
    desc: "좀처럼 보기 힘든 레어한 당신! <br><br> 먼 미래나 거창한 성과보다 지금 당장의 소소한 행복이 제일 중요해요. 평소엔 나긋나긋, 말하기보다 듣는 게 더 편해보이지만 내 사람들 앞에선 아주 활발해지는 당신. 평화와 조화를 추구하는 성격이라 대체로 사람들에게 잘 맞춰주는 물같은 성격이지만, 그렇기 때문에 남들보다 에너지가 더 빨리 소진돼서 꼭 집에서 오래 충전해줘야 해요.",
    like: "집 그리고 집 <br> 평화롭고 조용한 것 <br> 사람 만나기",
    hate: "사람 만나기 <br> 갈등이나 불화 <br> 자신을 통제하는 것",
    good: "십자가 <br> 선인장",
    bad: "초대장 <br> 왕의 왕관",
  },
  {
    mbti: "ISTJ",
    name: "학창시절 <br> 반장의 영어 단어장",
    img_src: "istj.jpeg",
    desc: "누구보다 신중하고 차분한 당신! <br><br> 화려하고 개성 넘치는 것보단 용의단정하고 무난한 게 더 편해요. 책임감이 강하고 의젓한 편이라 장남장녀 같다는 말을 많이 듣곤 해요. 어떤 일을 하든 디테일까지 완벽하게! 원리원칙과 팩트에 의거해 사고하고 행동하는 편이라 규칙과 패턴만 안다면 뭐든 뚝딱 해내요. 소싯적 어른들의 사랑을 독차지했겠는데요?",
    like: "팩트, 데이터, 계획 <br> 깔끔한 정리정돈 <br> 디테일, 또 디테일! ",
    hate: "귀찮은 인간관계 <br> 같은 실수 반복하기 <br> 눈에 띄는 것",
    good: "선글라스 <br> 무알콜 맥주",
    bad: "한 철의 꽃 <br> 농구공",
  },
  {
    mbti: "ISTP",
    name: "2000년대 <br> 유명한 디자이너의 가위",
    img_src: "istp.jpeg",
    desc: "말보단 행동으로 보여주는 당신! <br><br> 한번 뿐인 인생, 왜 복잡하게 이것저것 생각하고 남 눈치 보며 살아야 하나요? 뇌에 힘 빼고 물 흐르는대로 자기 일만 잘하면 되는 걸요. 혼자 일해도 능률 만점! 그렇기 때문에 당신은 혼자서 이것저것 뭐든 잘하고 싶어하고, 실제로도 잘 하는 편이에요. 자신의 관심 분야에는 누구보다 적극적이고 집중력이 높은 개썅마웨 스타일!",
    like: "나 혼자 노는 것 <br> 가식 없는 솔직함 <br> (꿈은 없고요 그냥) 노는 것",
    hate: "호들갑스러운 것 <br> 필요 없는 연락과 빈말 <br> 사람과 일하는 것",
    good: "초대장 <br> 뿌리 깊은 나무",
    bad: "한 철의 꽃 <br> 아이폰 13",
  },
  {
    mbti: "ESFJ",
    name: "2000년대 <br> 하이틴 주인공이 돌린 초대장",
    img_src: "esfj.jpeg",
    desc: "모임의 중심, 인기쟁이 당신! <br><br> 붙임성이 좋고 주목 받는 것에 익숙해요. 타인의 사소한 것이나 작은 추억에 관해서는 기억력이 좋고 섬세해 사람들을 잘 챙기고 잘 다루는 편이죠. 그래서 사람들에게 늘 둘러쌓여 있거나 모임에서는 중심 인물이 되는 당신은 진정한 인싸! 누구에게나 친절하지만 특히 가까운 사람일수록 더 존중하고, 주변에 소외된 사람이 없도록 모두를 챙기는 인류애 넘치는 당신은 욕심쟁이 우후훗!",
    like: "남들 챙기기 <br> 스몰토크 <br> 모두가 웃는 세상",
    hate: "눈치 없는 사람 <br> 남 탓 하는 사람 <br> 나 소외시키는 사람",
    good: "단단한 집 <br> 디자이너의 가위",
    bad: "선인장 <br> 농구공",
  },
  {
    mbti: "ESFP",
    name: "2000년대 <br> 국민 가수의 선글라스",
    img_src: "esfp.jpeg",
    desc: "자유로운 영혼, 끼 많은 당신! <br><br> 인생은 실전이다! 오지 않을 미래를 걱정하고 불안해 하기 보다 지금 당장 흐르는 노래에 춤을 추는 게 더 낫다는 당신은 어떤 상황에도 잘 적응하는 분위기 메이커예요. 언제나 흥이 넘치고 낙천적이라 같이 있으면 참 재미있는 사람이에요. 수다스럽고 좀 가벼워 보이면 어때요? 단순하고 재미있게 사는 게 제일 행복한걸요!",
    like: "서프라이즈 깜짝 파티 <br> 주목 받는 것 <br> 내 사람들과 놀기",
    hate: "혼자 있는 것 <br> 먼 미래 계획하기 <br> 왜들 그리 다운돼있는 분위기",
    good: "불빛 <br> 영어 단어장",
    bad: "선인장 <br> 십자가",
  },
  {
    mbti: "ESTJ",
    name: "1900년대부터 있었던 <br> 뿌리 깊은 나무",
    img_src: "estj.jpeg",
    desc: "뿌리가 깊은 만큼 무게감 있는 당신! <br><br> 오래된 나무처럼 자기 주장이 뚜렷한 편이에요. 공명정대, 준법정신처럼 올곧은 신념을 갖고 살아온 당신에게 어설픈 변명이나 허튼 수작은 통하지 않죠. 이런 성격 덕분에 어떤 조직이든 체계적으로 관리하는 능력이 탁월하지만 가부장적이고 딱딱해보이기도 하죠. 그렇지만 의외로 자기 사람은 잘 챙기고 의리 있는, 정 많은 사람이라는 걸 다들 알아주면 좋겠네요!",
    like: "근면성실 <br> 질서정연 <br> 준법정신 <br> 깔끔한 것",
    hate: "게으름 <br> 같은 실수를 반복하는 사람 <br> 술 먹고 꽐라되는 사람",
    good: "아이폰13 <br> 단단한 집",
    bad: "한 철의 꽃 <br> 농구공",
  },
  {
    mbti: "ESTP",
    name: "가장 처음 발매된 무알콜 맥주",
    img_src: "estp.jpeg",
    desc: "현실적이기에 한없이 쾌락을 추구하는 당신! <br><br> 한번 사는 인생, 인생 뭐 있나요! 욜로를 인간으로 표현한다면 당신과 비슷하지 않나요? 모험과 도전을 하지 않고 어떻게 즐거운 삶을 살아가냐고 외치는 당신. 당신은 거침없는 농담과 대범한 행동으로 사람들의 시선을 확 사로 잡는 독특한 캐릭터예요. 당신은 알콜 프리 ~ 지만 취한 듯 인생의 현재, 순간순간을 화끈하게 살아가고 있네요.",
    like: "인터넷의 여러 밈과 짤 <br> 즉흥적인 여행 <br> 완전히 몰입한 나",
    hate: "무논리로 무장한 꼰대 <br> 묵언수행 <br> 너무 진지한 것",
    good: "불빛 <br> 영어 단어장",
    bad: "농구공 <br> 왕의 왕관",
  },
];
