import { CUSMTOM_ELEMENTS_NAME } from "../../constants/customElementName.js";
import Component from "../Component.js";

export default class Footer extends Component {
  constructor() {
    super([]);
  }

  get styles() {
    return `
      <style>
        #footer {
          padding: 50px 0 100px 0;
          background-color: #f9fafb;
        }
        
        .footer_inner {
          max-width: 1064px;
          margin: auto;
          padding: 0 67px;
          box-sizing: border-box;
          width: 100%;
        }
        
        .footer_group_list {
          display: flex;
          padding-bottom: 50px;
        }
        
        .footer_site_group {
          min-width: 170px;
          margin: 0;
          padding: 0;
          color: #6b7684;
          list-style: none;
          font-size: 15px;
          line-height: 30px;
          box-sizing: border-box;
        }
        
        .footer_site_group_title {
          padding-bottom: 5px;
          color: #333d4b;
          font-weight: 700;
        }
        
        .footer_adrress {
          color: #8b95a1;
          font-size: 13px;
          font-style: normal;
          line-height: 20px;
        }
        
        .footer_adrress_company_name {
          display: block;
          padding-bottom: 16px;
          color: #333d4b;
          font-size: 15px;
          font-weight: 700;
        }
      </style>
    `;
  }

  createHTML() {
    return `
      <footer id="footer">
          <div class="footer_inner">
              <div class="footer_group_list">
                <ul class="footer_site_group">
                    <li class="footer_site_group_title">토스테크</li>
                    <li>의견 보내기</li>
                </ul>
                <ul class="footer_site_group">
                    <li class="footer_site_group_title">토스</li>
                    <li>홈페이지</li>
                    <li>회사 소개</li>
                    <li>채용</li>
                </ul>
                <ul class="footer_site_group">
                    <li class="footer_site_group_title">고객센터</li>
                    <li>전화: 1599-4905 (24시간 연중무휴)</li>
                    <li>이메일: support@toss.im</li>
                    <li>카카오톡: @toss</li>
                </ul>
            </div>
            <adress class="footer_adrress">
                <strong class="footer_adrress_company_name">㈜비바리퍼블리카</strong>
                Copyright © Viva Republica, Inc. All Rights Reserved.
            </adress>
        </div>
    </footer>
    `;
  }
}

window.customElements.define(CUSMTOM_ELEMENTS_NAME.APP_FOOTER, Footer);
