// data.js : 내 영화 5편 데이터 / 홍길동(학번) / 10주차
// 영화 한 편 = 객체 하나. 키 5개 : title, year, date, rating, poster

const movies = [
    {
        title: "스파이더맨: 노 웨이 홈", 
        id: 634649,
        year: 2021, 
        date: "2021-12-15",
        rating: 7.9, 
        poster: "/fvqoI9r1GU2EFkc0xjZ6dKCuDVR.jpg",
        overview: "미스테리오의 계략으로 세상에 정체가 탄로난 스파이더맨 피터 파커는 하루 아침에 평범한 일상을 잃게 된다."
    },
    {
        title: "스파이더맨: 브랜드 뉴 데이", 
        id: 969681,
        year: 2026, 
        date: "2026-07-29",
        rating: 8.5, 
        poster: "/mt6uZzy7DAsncHlGGzMsyNgLR6v.jpg",
        overview: "4년 전 소중한 사람들을 지키기 위해 모두의 기억에서 사라진 피터 파커."
    },
    {
        title: "스파이더맨: 홈커밍", 
        id: 315635,
        year: 2017, 
        date: "2017-07-05",
        rating: 7.3, 
        poster: "/hjki9weYYVABvkpZbX5jBOmKXXv.jpg",
        overview: "토니 스타크의 제안을 받고 시빌 워에 참여한 피터 파커는 다음 임무가 언제일지 설렘을 안고 하루하루를 보낸다."
    },
    {
        title: "어메이징 스파이더맨 2", 
        id: 102382,
        year: 2014, 
        date: "2014-04-16",
        rating: 6.6, 
        poster: "/eYaFLrKuEdzrGw6XG5ZTVciH28v.jpg",
        overview: "스파이더맨의 삶에 완전히 적응한 피터 파커는 거미줄로 뉴욕을 활강하며 위험에 처한 시민들을 구해주고 사랑하는 연인 그웬과 데이트를 즐기며 행복하게 살아간다."
    },
    {
        title: "스파이더맨: 파 프롬 홈", 
        id: 429617,
        year: 2019, 
        date: "2019-06-28",
        rating: 7.3, 
        poster: "/3YewJtji80oIroeXUavNRZkeXfQ.jpg",
        overview: "어벤져스 멤버들과 타노스와의 대접전을 마친 뒤, 지난 5년 동안 사라졌던 사람들이 동시에 돌아왔다."
    },
    {
        title: "암살자(들)", 
        id: 1418428,
        year: 2026, 
        date: "2026-09-23",
        rating: 7.5, 
        poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg",
        overview: "1974년 8월 15일, 제29회 광복절 경축식. 전 국민이 지켜보는 생중계 현장에서 영부인이 저격당하는 초유의 사태가 발생한다."
    }
];

const boxTop = {
    title: "극장판 치이카와: 인어 섬의 비밀",
    audience: 2393383
}