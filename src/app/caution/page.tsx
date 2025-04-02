"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NoticesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* ヘッダー */}
        <div data-aos="fade-down" className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">注意事項</h1>
          <p className="text-gray-600 text-lg">
            当サイトをご利用いただく前に、以下の注意事項を必ずお読みください。
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>

        {/* 最終更新日 */}
        <div
          data-aos="fade-up"
          className="mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-200"
        >
          <p className="text-gray-500">最終更新日: 2025年3月28日</p>
        </div>

        {/* セクション：利用規約 */}
        <section
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-indigo-600"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. 利用規約の適用
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当サイトにアクセスし、閲覧、購入その他のサービスをご利用いただくことにより、お客様は本規約に同意したものとみなされます。
            本規約に同意いただけない場合は、当サイトのご利用をお控えください。当社は、予告なく本規約を変更する場合があります。
            変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
          </p>
          <p className="text-gray-700 leading-relaxed">
            本規約の変更後に当サイトをご利用いただいた場合、お客様は変更後の規約に同意したものとみなされます。
            定期的に本ページをご確認いただくことをお勧めします。
          </p>
        </section>

        {/* セクション：免責事項 */}
        <section
          data-aos="fade-up"
          data-aos-delay="150"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-500"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. 免責事項
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当サイトの情報は、可能な限り正確な情報を掲載するよう努めておりますが、提供している情報、リンク先などにより、
            いかなる損害が生じたとしても、当社は一切の責任を負いません。また、当サイトの一時的な中断、
            中止等によってユーザーに生じた損害についても、当社は一切の責任を負いません。
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            商品の色味、デザイン、素材感などは、お客様がご利用のモニターやブラウザなどの環境により、
            実際の商品と異なって見える場合があります。これによる返品・交換は、特定商取引法に基づく返品規定の範囲内でのみ対応いたします。
          </p>
          <p className="text-gray-700 leading-relaxed">
            当サイトで提供される情報は法的なアドバイスではなく、専門家への相談の代替となるものではありません。
            具体的な問題については、適切な専門家にご相談ください。
          </p>
        </section>

        {/* セクション：個人情報保護 */}
        <section
          data-aos="fade-up"
          data-aos-delay="200"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. 個人情報保護方針
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当社は、お客様の個人情報を適切に保護することが社会的責務であると考え、以下の方針に基づき個人情報の保護に努めます。
            当社は、個人情報を収集する場合、利用目的を明確にし、その目的の範囲内でのみ利用いたします。
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当社は、法令に定める場合を除き、お客様の同意なく個人情報を第三者に提供いたしません。
            ただし、商品の発送や決済処理など、業務の一部を委託する場合があります。その場合、委託先に対して適切な監督を行います。
          </p>
          <p className="text-gray-700 leading-relaxed">
            当社は、個人情報の漏洩、滅失、毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。
            お客様ご自身の個人情報の開示、訂正、削除をご希望の場合は、当社所定の手続きにより対応いたします。
          </p>
        </section>

        {/* セクション：禁止事項 */}
        <section
          data-aos="fade-up"
          data-aos-delay="250"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. 禁止事項
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当サイトのご利用にあたり、以下の行為を禁止いたします。これらの行為が確認された場合、予告なくサービスの利用を制限または停止する場合があります。
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li className="leading-relaxed">法令または公序良俗に反する行為</li>
            <li className="leading-relaxed">
              当社または第三者の著作権、商標権等の知的財産権を侵害する行為
            </li>
            <li className="leading-relaxed">
              当社または第三者の名誉・信用を毀損する行為
            </li>
            <li className="leading-relaxed">
              当社または第三者のプライバシーを侵害する行為
            </li>
            <li className="leading-relaxed">当サイトの運営を妨害する行為</li>
            <li className="leading-relaxed">
              不正アクセス、クラッキング等のサイバー攻撃を行う行為
            </li>
            <li className="leading-relaxed">
              同一人物による複数アカウントの作成・使用
            </li>
            <li className="leading-relaxed">
              当サイトの信頼性を損なう虚偽の情報を流布する行為
            </li>
            <li className="leading-relaxed">
              その他、当社が不適切と判断する行為
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            違反行為によって生じた損害については、当該ユーザーが全ての法的責任を負うものとします。
          </p>
        </section>

        {/* セクション：商品の返品・交換 */}
        <section
          data-aos="fade-up"
          data-aos-delay="300"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. 商品の返品・交換について
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            商品の品質には万全を期しておりますが、万が一不良品・破損品・注文と異なる商品が届いた場合は、
            商品到着後7日以内にカスタマーサポートまでご連絡ください。送料当社負担にて返品・交換させていただきます。
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            お客様のご都合による返品・交換は、商品到着後7日以内、未使用・未開封の場合に限り承ります。
            この場合、送料はお客様のご負担となります。なお、以下の商品については返品・交換をお受けできません：
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li className="leading-relaxed">お客様が使用・開封された商品</li>
            <li className="leading-relaxed">
              お客様の責任で破損・汚損された商品
            </li>
            <li className="leading-relaxed">
              商品ページに「返品不可」と明記されている商品
            </li>
            <li className="leading-relaxed">食品、化粧品等の衛生商品</li>
            <li className="leading-relaxed">
              ダウンロード商品、デジタルコンテンツ
            </li>
            <li className="leading-relaxed">オーダーメイド商品</li>
          </ul>
        </section>

        {/* セクション：著作権・知的財産権 */}
        <section
          data-aos="fade-up"
          data-aos-delay="350"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. 著作権・知的財産権
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当サイトに掲載されているすべてのコンテンツ（文章、画像、デザイン、ロゴ、音声、動画、ソフトウェア等）は、
            当社または正当な権利者に帰属します。これらのコンテンツは、著作権法、商標法その他の知的財産権法によって保護されています。
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当サイトのコンテンツを、権利者の書面による事前の許可なく、複製、公開、送信、配布、譲渡、貸与、翻訳、変更、
            改変、転用、転載等することは禁止します。当サイトからのダウンロードが明示的に許可されているコンテンツについては、
            個人的な非商業目的に限り利用することができます。
          </p>
          <p className="text-gray-700 leading-relaxed">
            当サイトにおいて当社が提供するサービス、技術、ソフトウェア等に関する特許権、実用新案権、
            意匠権等の知的財産権についても、すべて当社または正当な権利者に帰属します。
          </p>
        </section>

        {/* セクション：キャンセルポリシー */}
        <section
          data-aos="fade-up"
          data-aos-delay="450"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-500"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. キャンセルポリシー
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ご注文確定後のキャンセルは、商品の発送前に限り承ります。キャンセルをご希望の場合は、
            速やかにカスタマーサポートまでご連絡ください。ただし、以下の場合にはキャンセルをお受けできません：
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li className="leading-relaxed">商品が既に発送されている場合</li>
            <li className="leading-relaxed">
              オーダーメイド商品の製作が開始されている場合
            </li>
            <li className="leading-relaxed">
              特別価格や限定商品として明示されている場合
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            ご注文のキャンセルにより当社に損害が生じた場合、その賠償をお客様に請求する場合があります。
            定期購入サービスの解約については、次回発送予定日の5営業日前までにお申し出ください。
          </p>
        </section>

        {/* セクション：システム障害 */}
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-pink-500"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. システム障害等について
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            当サイトのサーバー障害、システムメンテナンス、ハッキング、天災その他の不可抗力により、
            サービスが一時的に中断または停止する場合があります。このような事態が発生した場合でも、
            当社は一切の責任を負いません。
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            システム障害等により商品の価格表示に誤りがあった場合、当社は正しい価格で再度ご注文いただくか、
            ご注文をキャンセルする権利を留保します。明らかに誤りと判断される価格でのご注文については、
            当社の判断によりキャンセルさせていただく場合があります。
          </p>
          <p className="text-gray-700 leading-relaxed">
            当サイトへのアクセス集中やネットワーク環境により、一時的にサイトへのアクセスが困難になる場合があります。
            その場合は時間をおいて再度アクセスしていただきますようお願いいたします。
          </p>
        </section>

        {/* セクション：お問い合わせ */}
        <section
          data-aos="fade-up"
          data-aos-delay="550"
          className="mb-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-500"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. お問い合わせ
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            本規約に関するお問い合わせ、ご不明点、ご要望などがございましたら、下記のカスタマーサポートまでご連絡ください。
            平日10:00〜18:00（土日祝日・年末年始を除く）に対応いたします。
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 font-medium">byPayカスタマーサポート</p>
            <p className="text-gray-700 mb-2">メール：support@example.com</p>
            <p className="text-gray-700 mb-2">電話：03-XXXX-XXXX</p>
            <p className="text-gray-700">受付時間：平日10:00〜18:00</p>
          </div>
        </section>

        {/* 最終注意書き */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 text-center text-gray-600"
        >
          <p className="mb-4">
            本注意事項は、予告なく変更される場合があります。最新の内容をご確認ください。
          </p>
          <p className="text-sm">© 2025 byPay. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default NoticesPage;
