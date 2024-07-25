export default function Projects() {
    const projectLinks = [
        {
          name: "Domposer",
          link: "https://domposer.com"
        },
        {
          name: "Bay.js",
          link: "https://bayjs.org"
        },
        {
          name: "Cookiemunch",
          link: "https://cookiemunch.dunks1980.com"
        },
        {
          name: "Screen time converter",
          link: "https://screentimeconverter.com"
        },
        {
          name: "inline.svg",
          link: "https://inlinesvg.dunks1980.com"
        },
      ]

      return (
        <>
            <h4 className="font-bold text-2xl py-4">Projects</h4>
            <ul>
                {
                    projectLinks.map(el => 
                    (
                        <li className="transition-all duration-500 hover:-translate-y-1">
                            <a className="underline font-thin " href={el.link} target="_blank">
                                {el.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>
      )
}