import React, { useContext } from 'react'
import './Profile.min.css'
import { LanguageContext } from '../contexts/LanguageContext';

function Profile() {
    /* Setting Menu Languages */
    const {language} = useContext(LanguageContext);

    if(language === "fr-fr") {

        return (
            <div id="profile-page">
                <h1>Title FRANÇAIS</h1>
                <p>Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique. </p>
                <h1>Title FRANÇAIS</h1>
                <p>Ce texte a pour autre avantage d'utiliser des mots de longueur variable, essayant de simuler une occupation normale. La méthode simpliste consistant à copier-coller un court texte plusieurs fois (« ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ») a l'inconvénient de ne pas permettre une juste appréciation typographique du résultat final. Ce texte a pour autre avantage d'utiliser des mots de longueur variable, essayant de simuler une occupation normale. La méthode simpliste consistant à copier-coller un court texte plusieurs fois (« ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ceci est un faux-texte ») a l'inconvénient de ne pas permettre une juste appréciation typographique du résultat final.</p>
                <h1>Title FRANÇAIS</h1>
                <p>l circule des centaines de versions différentes du Lorem ipsum, mais ce texte aurait originellement été tiré de l'ouvrage de Cicéron, De Finibus Bonorum et Malorum (Liber Primus, 32), texte populaire à cette époque, dont l'une des premières phrases est : « Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... » (« Il n'existe personne qui aime la souffrance pour elle-même, ni qui la recherche ni qui la veuille pour ce qu'elle est... »). l circule des centaines de versions différentes du Lorem ipsum, mais ce texte aurait originellement été tiré de l'ouvrage de Cicéron, De Finibus Bonorum et Malorum (Liber Primus, 32), texte populaire à cette époque, dont l'une des premières phrases est : « Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... » (« Il n'existe personne qui aime la souffrance pour elle-même, ni qui la recherche ni qui la veuille pour ce qu'elle est... »).</p>
            </div>
        )
    } 
    else if (language === "ja") 
    {
        return (
            <div id="profile-page">
                <h1>Title 日本語</h1>
                <p>私は気が短いし、口も軽い男だ。 肩慣らしには丁度いいかも。 インターネットのテクノロジーは日進月歩、いや、秒進分歩で進歩している。 イルカは頭のよい遊び好きな生き物だ。 いいからさっき盗ったモノを、カバンの中から出しなさい。 もし電気がないと、私たちの暮らしがどのようなものになるか想像できますか。 これが探していたものだ」と彼は叫んだ。 彼の話はあまりにも馬鹿げていたので誰も信じなかった。 ＡＳＥＡＮという文字は東南アジア諸国連合を表します。 日本には美しい都市が多い。例えば京都、奈良だ。</p>
                <h1>Title 日本語</h1>
                <p>１９８４年の８月、私は仕事でたまたま沖縄に行く事になった。 ８時にヒースロー空港に到着する予定です。 もし電気がないと、私たちの暮らしがどのようなものになるか想像できますか。 いつ神戸に来るのか教えて下さい。 彼らのコミュニケーションは我々が考えてきたものよりはるかに複雑かもしれません。 ８時にヒースロー空港に到着する予定です。 ＡＳＥＡＮという文字は東南アジア諸国連合を表します。 家に帰りましょうか。 ２、３ページの英語を訳すのに２時間以上もかかりました。 警察を呼んで！１９８４年の８月、私は仕事でたまたま沖縄に行く事になった。 ８時にヒースロー空港に到着する予定です。 もし電気がないと、私たちの暮らしがどのようなものになるか想像できますか。 いつ神戸に来るのか教えて下さい。 彼らのコミュニケーションは我々が考えてきたものよりはるかに複雑かもしれません。 ８時にヒースロー空港に到着する予定です。 ＡＳＥＡＮという文字は東南アジア諸国連合を表します。 家に帰りましょうか。 ２、３ページの英語を訳すのに２時間以上もかかりました。 警察を呼んで！</p>
                <h1>Title 日本語</h1>
                <p>ＡＳＥＡＮという文字は東南アジア諸国連合を表します。 10分だけ付き合おう。 家に帰りましょうか。 いよいよという時に言葉が出ない。 申し訳ないけど長居できないんですよ。 おはよう」とトムは微笑みながら言った。 家に帰りましょうか。 日本には美しい都市が多い。例えば京都、奈良だ。 「はい」と「いいえ」しか言わない人と会話を続けるのは難しい。 １０２゜Ｆの熱があります。ＡＳＥＡＮという文字は東南アジア諸国連合を表します。 10分だけ付き合おう。 家に帰りましょうか。 いよいよという時に言葉が出ない。 申し訳ないけど長居できないんですよ。 おはよう」とトムは微笑みながら言った。 家に帰りましょうか。 日本には美しい都市が多い。例えば京都、奈良だ。 「はい」と「いいえ」しか言わない人と会話を続けるのは難しい。 １０２゜Ｆの熱があります。</p>
            </div>
        );
    } 
    else if (language === "en-us")
    {
        return (
            <div id="profile-page">
                <h1>Title ENGLISH</h1>
                <p>Even though using "lorem ipsum" often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning. Where text is visible in a document, people tend to focus on the textual content rather than upon overall presentation, so publishers use lorem ipsum when displaying a typeface or design in order to direct the focus to presentation. "Lorem ipsum" also approximates a typical distribution of spaces in English.</p>
                <h1>Title ENGLISH</h1>
                <p>The most common lorem ipsum text reads as follows: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The most common lorem ipsum text reads as follows: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h1>Title ENGLISH</h1>
                <p>The text is derived from Cicero's De Finibus Bonorum et Malorum (On the Ends of Goods and Evils, or alternatively [About] The Purposes of Good and Evil ). The original passage began: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit (Translation: "Neither is there anyone who loves grief itself since it is grief and thus wants to obtain it"). It is not known exactly when the text acquired its current standard form; it may have been as late as the 1960s. The passage was discovered by Richard McClintock, a Latin scholar who is the publications director at Hampden-Sydney College in Virginia, by searching for citings of the rarely used word 'consectetur' in classical literature. The text is derived from Cicero's De Finibus Bonorum et Malorum (On the Ends of Goods and Evils, or alternatively [About] The Purposes of Good and Evil ). The original passage began: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit (Translation: "Neither is there anyone who loves grief itself since it is grief and thus wants to obtain it"). It is not known exactly when the text acquired its current standard form; it may have been as late as the 1960s. The passage was discovered by Richard McClintock, a Latin scholar who is the publications director at Hampden-Sydney College in Virginia, by searching for citings of the rarely used word 'consectetur' in classical literature.</p>
            </div>
        )
    }
    else 
    {
        return (
            <div id="profile-page">
                <h1>Title ENGLISH</h1>
                <p>Even though using "lorem ipsum" often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning. Where text is visible in a document, people tend to focus on the textual content rather than upon overall presentation, so publishers use lorem ipsum when displaying a typeface or design in order to direct the focus to presentation. "Lorem ipsum" also approximates a typical distribution of spaces in English.</p>
                <h1>Title ENGLISH</h1>
                <p>The most common lorem ipsum text reads as follows: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. The most common lorem ipsum text reads as follows: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h1>Title ENGLISH</h1>
                <p>The text is derived from Cicero's De Finibus Bonorum et Malorum (On the Ends of Goods and Evils, or alternatively [About] The Purposes of Good and Evil ). The original passage began: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit (Translation: "Neither is there anyone who loves grief itself since it is grief and thus wants to obtain it"). It is not known exactly when the text acquired its current standard form; it may have been as late as the 1960s. The passage was discovered by Richard McClintock, a Latin scholar who is the publications director at Hampden-Sydney College in Virginia, by searching for citings of the rarely used word 'consectetur' in classical literature. The text is derived from Cicero's De Finibus Bonorum et Malorum (On the Ends of Goods and Evils, or alternatively [About] The Purposes of Good and Evil ). The original passage began: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit (Translation: "Neither is there anyone who loves grief itself since it is grief and thus wants to obtain it"). It is not known exactly when the text acquired its current standard form; it may have been as late as the 1960s. The passage was discovered by Richard McClintock, a Latin scholar who is the publications director at Hampden-Sydney College in Virginia, by searching for citings of the rarely used word 'consectetur' in classical literature.</p>
            </div>
        )
    }
}

export default Profile
