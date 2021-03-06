**:no_entry: 2019년 8월 13일 자로 SRT Macro 크롬 확장프로그램 및 웨일 확장앱 게시를 중단했습니다. SR 측의 요청에 따라, 승차권 예발매 서비스 장애 및 악용 사례 (부정 판매, 알선 행위 및 양도양수 판매)를 방지하기 위해 게시된 프로그램을 삭제했습니다. 사용자 분들도 [경찰청 보도자료](https://www.police.go.kr/portal/bbs/view.do?nttId=21859&bbsId=B0000011&searchCnd=1&searchWrd=%EB%A7%A4%ED%81%AC%EB%A1%9C&section=&sdate=&edate=&useAt=&replyAt=&menuNo=200488&viewType=&delCode=0&option1=&option2=&option4=&option5=&deptId=&larCdOld=&midCdOld=&smCdOld=&orderType=&pageUnit=10&pageIndex=1)를 참고하시고, 관련하여 피해를 입는 일이 없으시도록 각별히 주의하여 주시기 바랍니다. 그동안 SRT Macro 확장 프로그램을 사용해주셔서 감사합니다.**

---

# SRT Macro
![srtmacro](http://i.imgur.com/hTgoL8S.png)
SRT Macro는 매진된 SRT 승차권 예매를 도와주는 크롬 확장 프로그램으로, 기존의 [Korail Macro](https://github.com/kswchoo/korailmacro)를 기반으로 만들어진 프로그램입니다.

## 사용 방법

1. GitHub 소스를 로컬에 내려받아 압축을 해제한 후, 크롬 주소창에 **chrome://extensions/** 입력하여 확장 프로그램으로 이동합니다.
2. 우측 상단에 **개발자 모드** 를 클릭하면 하단에 추가된 메뉴 중 **압축해제된 확장 프로그램을 로드합니다.** 를 클릭합니다.
3. **1번 항목** 에서 압축해제한 폴더를 선택하여 **폴더 선택** 을 클릭합니다.
4. [SR 홈페이지](https://etk.srail.co.kr/main.do)에 접속해 로그인을 합니다.
5. 로그인 후, 원하는 날짜와 시간을 선택하고 '조회하기'를 누르면 **매크로 시작** 버튼이 생긴 것을 확인할 수 있습니다. 이 때, 원하는 열차의 **매크로 체크박스**를 누르고 **매크로 시작** 버튼을 누르면 프로그램이 시작됩니다.
6. 예약이 성공하면 트럼펫 소리와 함께 결제 화면으로 넘어갑니다. (**옵션**에서 항목 **Bot Token**과 **Your Telegram Chat ID** 값 세팅 시 텔레그램으로 알려줍니다.)

## 옵션

- **"Exclude Merge Ticket"** : 병합발권(입석+좌석) 을 제외할 것인지 선택합니다.(Default : true)
- **"Bot Token"** : 텔레그램 BOT 토큰 값을 입력합니다. (Optional)
- **"Your Telegram Chat ID"** : 텔레그램 Chat ID 값을 입력합니다. (Optional)

## 주의 사항

- SRT Macro 크롬 확장 프로그램을 사용하기 전에 **로그인**을 먼저 하고 사용하길 권장합니다.
- 예약 완료시 트럼펫 사운드가 재생되므로 빠른 결제를 위해 **스피커**를 켜두시길 권장합니다.
- SR 시스템 상 **20분** 내로 결제를 해야 예약이 완료되므로 주의하시길 바랍니다.

## 텔레그램 봇 관련
[참조링크](https://github.com/enriqueserr9119/telegram-crypto-bot#create-a-telegram-bot)

- 텔레그램 **Bot** 생성 및 **Bot Token** 값 생성 방법 
- 텔레그램 **Chat ID** 생성 방법

## License

MIT License