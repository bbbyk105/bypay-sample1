const TermsOfUse = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">ご利用にあたって</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">お取り扱いについて</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>当店の商品は一点一点手作業で制作しております。</li>
          <li>
            同一商品でも、色味やサイズに若干の個体差がある場合がございます。
          </li>
          <li>素材の特性上、強い衝撃や水濡れにはご注意ください。</li>
          <li>実物と画像では、色味や質感に差が生じることがあります。</li>
          <li>小さなお子様の手の届かない場所で保管してください。</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">ご利用規約</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>商品ご購入後のキャンセルは原則お受けしておりません。</li>
          <li>商品の転売は固くお断りしております。</li>
          <li>商品に欠陥がある場合を除き、返品・交換はお受けできません。</li>
          <li>本サービスの内容は予告なく変更される場合がございます。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">特定商取引法に基づく表記</h2>
        <div className="text-gray-700 space-y-1">
          <p>
            <strong>販売業者：</strong>株式会社〇〇
          </p>
          <p>
            <strong>代表責任者：</strong>〇〇 〇〇
          </p>
          <p>
            <strong>所在地：</strong>〒123-4567 東京都〇〇区〇〇1-2-3
          </p>
          <p>
            <strong>電話番号：</strong>03-1234-5678
          </p>
          <p>
            <strong>メールアドレス：</strong>info@example.com
          </p>
          <p>
            <strong>販売価格：</strong>各商品ページに記載
          </p>
          <p>
            <strong>商品代金以外の必要料金：</strong>送料・決済手数料など
          </p>
          <p>
            <strong>支払方法：</strong>現金・クレジットカード・QRコード決済
          </p>
          <p>
            <strong>引き渡し時期：</strong>
            対面販売時に即時引き渡し、または個別連絡
          </p>
          <p>
            <strong>返品・交換について：</strong>
            初期不良のみ、到着後7日以内にご連絡ください。
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
