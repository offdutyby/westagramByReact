import React from 'react';
import Jung from '../Img/jung.jpg';
import Kang from '../Img/kang.jpg';
import Seo from '../Img/seo.jpeg';
import Song from '../Img/song.jpg';
import '../Main/Main.css';
import LogoText from '../Img/logo_text.png';


class Nav extends React.Component {
    render(){
        return(
      <div className="nav_container">
        <div className="nav">
          <div className="nav_left">
            <img className="nav_left_logo_img" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt="das"/>
            <div className="nav_left_logo_vertical">
            </div>
            <img className="nav_left_text_img" src={LogoText} alt="d"/>
          </div>
        <div className="nav_center">
            <input className="nav_center_search" type="text" name="" value="" placeholder="검색"/>
        </div>
          <div className="nav_right">
            <div className="nav_right_icon">
              <img className="compass" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="d"/>
              <img className="heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="d"/>
              <img className="mypage" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="d"/>
            </div>
          </div>
        </div>
      </div>
        )
    }
}

class Body extends React.Component {
  render(){
      return(
      <div class="main">
        <article class="main_article">
          <header class="main_article_header">
            <img class="main_article_header_profile_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=QedpHIQQ8cAAX8XGueH&oh=7cfed46c5d312189e9d18a59e1a6683b&oe=5F037360" alt=""/>
            <div class="main_article_header_profile_dots">
              <span class="main_atrticle_header_profile">dlwlrma</span>
              <img class="main_article_header_dots" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt=""/>
            </div>
          </header>
          <div class="main_article_img_container">
            <img class="main_article_img" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F151081234B5C699515" alt=""/>
          </div>
          <div class="main_article_bottom">
            <div class="main_article_icon">
              <div class="main_article_icon_left">
                <img class="heart_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt=""/>
                <img class="balloon_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt=""/>
                <img class="share_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt=""/>
              </div>
              <div class="main_article_icon_right">
                <img class="bookmark_icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt=""/>
              </div>
            </div>
            <div class="thread">
              <div class="thread_like">
                <img class="like_img"src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/41646432_2239342419681315_2022331281701863424_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=JPQLXKxbPFwAX9MtgrV&oh=0d7ec9ba077e3bb4e16292d2ced3e131&oe=5F045A6E" alt=""/>
                <span>
                  <span class="bold_text">kwonjeonghyeon</span>님 <span class="bold_text">외 55명</span>이 좋아합니다.
                </span>
              </div>
              <div class="thread_mid_container">
                <div class="thread_message">
                  <span class="bold_text">offdutybyblo </span>공을 던져요
                  <img class="grey_heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt=""/>
                </div>
                <div class="thread_time">
                  11시간전
                </div>
                <div class="thread_add">
                </div>
              </div>
              <div class="thread_container">
                <div class="input_thread">
                  <div class="input_thread_form" method="post">
                    <input class="form_input" id="thread_input" name="name" placeholder="댓글 입력..."value=""/>
                    <button class="form_input_send" id="thread_btn" type="button" >게시</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div class="main_side">
          <div class="main_side_profile_container">
            <div class="main_side_profile_img_container">
              <img class="main_side_profile_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79385091_464147214301568_7384006344782643200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=idH9TiUaUT0AX8F9lj7&oh=cd2ed4cb92a180e653418ba153eca2a2&oe=5F056174" alt=""/>
            </div>
            <div class="main_side_profile">
              <div class="main_side_profile_id">
                <span class="bold_text">offdutybyblo</span>
              </div>
              <div class="main_side_profile_name">
                <span>현정호</span>
              </div>
            </div>
          </div>
          <div class="main_side_story">
            <div class="story_header">
              <div class="story_header_story">
                스토리
              </div>
              <div class="story_header_all">
                모두보기
              </div>
            </div>
            <div class="story_second">
              <div class="story_profile">
                <div class="story_profile_img_container">
                  <img class="story_profile_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/62258958_494765194435700_8322888124128559104_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=kWrQNYR0MhUAX8mXCus&oh=bfb1444beb0d7fbb4c4e1c14552dfd2e&oe=5F049832" alt=""/>
                </div>
                <div class="story_profile_container">
                  <div class="story_profile_id">
                    dhoi
                  </div>
                  <div class="story_profile_time">
                    6시간 전
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main_side_recommend">
            <div class="recommend_header">
              <div class="recommend_header_title">
                회원님을 위한 추천
              </div>
              <div class="recommend_header_all">
                모두 보기
              </div>
            </div>
            <div class="recommend_second">
              <div class="recommend_second_section">
                <div class="section_img_container">
                  <img class="section_img" src={Kang} alt=""/>
                </div>
                <div class="section_profile">
                  <div class="section_id">
                    강백호
                  </div>
                  <div class="section_status">
                    회원님을 팔로우합니다.
                  </div>
                </div>
                <div class="section_follow">
                  팔로우
                </div>
              </div>
                <div class="recommend_second_section">
                  <div class="section_img_container">
                    <img class="section_img" src={Seo} alt=""/>
                  </div>
                  <div class="section_profile">
                    <div class="section_id">
                      서태웅
                    </div>
                    <div class="section_status">
                      회원님을 팔로우합니다.
                    </div>
                  </div>
                  <div class="section_follow">
                    팔로우
                  </div>
                </div>
                <div class="recommend_second_section">
                  <div class="section_img_container">
                    <img class="section_img" src={Jung} alt=""/>
                  </div>
                  <div class="section_profile">
                    <div class="section_id">
                      정대만
                    </div>
                    <div class="section_status">
                      회원님을 팔로우합니다.
                    </div>
                  </div>
                  <div class="section_follow">
                    팔로우
                  </div>
                </div>
                <div class="recommend_second_section">
                  <div class="section_img_container">
                    <img class="section_img" src={Song} alt=""/>
                  </div>
                  <div class="section_profile">
                    <div class="section_id">
                      송태섭
                    </div>
                    <div class="section_status">
                      회원님을 팔로우합니다.
                    </div>
                  </div>
                  <div class="section_follow">
                    팔로우
                  </div>
                </div>
            </div>
          </div>
          <div class="main_side_footer">
            <div class="footer_info">
              <nav class="footer_info_list">
                <ul>
                  <li><a href="">소개</a></li>
                  <li><a href="">도움말</a></li>
                  <li><a href="">홍보 센터</a></li>
                  <li><a href="">API</a></li>
                  <li><a href="">채용 정보</a></li>
                  <li><a href="">개인정보처리방침</a></li>
                  <li><a href="">약관</a></li>
                  <li><a href="">위치</a></li>
                  <li><a href="">인기 계정</a></li>
                  <li><a href="">해시태그</a></li>
                  <li><a href="">언어</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      )
  }
}




class Main extends React.Component {
    render(){
        return(
          <>
            <Nav/>
            <Body/>
          </>
    )
  }
}



export default Main 