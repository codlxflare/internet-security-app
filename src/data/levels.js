const levels = [
  {
    id: 1,
    title: 'Опасные письма',
    instructions: 'Узнайте, как распознавать фишинговые письма.',
    image: '/assets/images/level1.png',
    questions: [
      { id: 'q1', question: 'Какое письмо безопасное?', options: [
        { value: 'A', label: 'С подозрительным адресом', correct: false },
        { value: 'B', label: 'От известного отправителя', correct: true }
      ]},
      { id: 'q2', question: 'Чего не должно быть в письме?', options: [
        { value: 'A', label: 'Ошибок и угроз', correct: false },
        { value: 'B', label: 'Грамотного текста', correct: false }
      ]}
    ],
    miniGame: {
      items: [
        { id: 'drag1', label: 'My$ecure123', correctZone: 'safe' },
        { id: 'drag2', label: 'password', correctZone: 'unsafe' },
        { id: 'drag3', label: '123456', correctZone: 'unsafe' },
        { id: 'drag4', label: 'S@fE_P@ss!', correctZone: 'safe' }
      ],
      zones: [
        { key: 'safe', label: 'Надёжные пароли' },
        { key: 'unsafe', label: 'Ненадёжные пароли' }
      ],
      points: 20
    }
  },
  {
    id: 2,
    title: 'Надёжные пароли',
    instructions: 'Научитесь создавать сложные пароли.',
    image: '/assets/images/level2.png',
    questions: [
      { id: 'q1', question: 'Что должно быть в пароле?', options: [
        { value: 'A', label: 'Только буквы', correct: false },
        { value: 'B', label: 'Буквы, цифры и символы', correct: true }
      ]}
    ],
    miniGame: {
      items: [
        { id: 'drag1', label: 'My$ecure123', correctZone: 'safe' },
        { id: 'drag2', label: 'password', correctZone: 'unsafe' },
        { id: 'drag3', label: '123456', correctZone: 'unsafe' },
        { id: 'drag4', label: 'S@fE_P@ss!', correctZone: 'safe' }
      ],
      zones: [
        { key: 'safe', label: 'Надёжные пароли' },
        { key: 'unsafe', label: 'Ненадёжные пароли' }
      ],
      points: 20
    }
  },
  {
    id: 3,
    title: 'Опасные ссылки',
    instructions: 'Научитесь распознавать мошеннические ссылки.',
    image: '/assets/images/level3.png',
    questions: [
      { id: 'q1', question: 'Выберите безопасную ссылку:', options: [
        { value: 'A', label: 'http://free-money.com', correct: false },
        { value: 'B', label: 'https://secure-site.com', correct: true }
      ]}
    ]
  },
  {
    id: 4,
    title: 'Безопасное общение',
    instructions: 'Изучите правила безопасного общения в интернете.',
    image: '/assets/images/level4.png',
    questions: [
      { id: 'q1', question: 'Что безопаснее делать?', options: [
        { value: 'A', label: 'Общаться с незнакомцами', correct: false },
        { value: 'B', label: 'Делать конфиденциальные данные доступными только близким', correct: true }
      ]}
    ]
  },
  {
    id: 5,
    title: 'Социальные сети',
    instructions: 'Узнайте, как безопасно вести себя в социальных сетях.',
    image: '/assets/images/level5.png',
    questions: [
      { id: 'q1', question: 'Как поступить с профилем?', options: [
        { value: 'A', label: 'Публиковать личные данные', correct: false },
        { value: 'B', label: 'Делать профиль закрытым', correct: true }
      ]}
    ]
  },
  {
    id: 6,
    title: 'Интернет-мошенничество',
    instructions: 'Научитесь избегать уловок мошенников.',
    image: '/assets/images/level6.png',
    questions: [
      { id: 'q1', question: 'Что делать перед покупкой?', options: [
        { value: 'A', label: 'Принять предложение от неизвестного магазина', correct: false },
        { value: 'B', label: 'Проверить отзывы о магазине', correct: true }
      ]}
    ]
  }
];
export default levels;