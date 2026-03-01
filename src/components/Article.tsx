import "./article.css";

export function Article() {
  return (
    <article className="blog-article">
      <header className="article-header">
        <div className="article-meta">
          <span className="article-date">March 1, 2026</span>
          <span className="article-category">Physics</span>
        </div>
        <h1 className="article-title">
          On Hydrodynamic Circuits, or Why Everything is Ohm's Law
        </h1>
        <p className="article-excerpt">
          Ohm's law has explained the flow of electrical current in circuits for
          two centuries. But perhaps it states something more fundamental about
          how things flow in our universe, and help us design better systems for
          easier lives.
        </p>
      </header>

      <div className="article-content">
        <p>
          Electricity has greatly improved the quality of life in the modern
          age. Everything from the simplest computer fan to the Arsenal Bird
          drone-carrier has been made possible thanks to our abillity to
          understand and harness electricity. Fundamental to this understanding,
          is the potential-current relation, colloqiolly known as Ohm's law. The
          question now arises, if we can use or modify this principle to
          understand other systems.
        </p>
        <h2>Ohm's Law</h2>
        <p>
          The potential-current relation, also known as Ohm's law, explains how
          electrical current depends on the electrical potential difference
          (also known as the voltage) and the resistance to said current. Simply
          put, the current in a circuit is linearly dependent on the voltage of
          the circuit, by a constant known as the electrical resistance. For
          example, say I have a battery which has a voltage of 10 volts,
          connected to lightbulb. This lightbulb, by virtue of converting
          electrical energy into light, has some resistance. For convenience
          let's say this resistance is 2 ohm. Thus the current flowing through
          this circuit will be 10 volts divided by 2 ohms, that is 5 amperes.
        </p>
        <p>
          The same fundamental principle from the example above applies to the
          electricity in your home
          <sup id="ref-1">
            <a href="#footnote-1">1</a>
          </sup>
          . The electricity in your home sockets provides a potential difference
          of approximately 240 volts. If you plug in a kettle that has a heating
          element that has a resistance of say 60 ohms. We can now work out that
          this kettle will draw 4 amperes of current. Should the kettle fail for
          some reason, like a short circuit, the resistance would fall quickly,
          meaning the current would increase quickly, which could lead to
          disastrous consequences
          <sup id="ref-2">
            <a href="#footnote-2">2</a>
          </sup>
          .
        </p>

        <h2>Parallel Circuits</h2>
        <p>
          As you might imagine, having a lot of these appliances in the same
          circuit would cause problems. The simplest of which is that if one
          fails, every appliance further down the line would not have enough
          current to operate properly. Luckily, there is a solution. We can
          place these appliances in parallel to each other. That is to say, we
          can "split" a wire into two (or more) different wires, and connect an
          appliance to each of them. Since the potential difference is the same
          across the circuit still, and the resistance provided by each
          appliance hasn't changed, the current must be reduced. We can once
          again use Ohm's law to calculate the current through each path,
          however due to the added complexity the math isn't quite so simple
          anymore. Regardless, we can show that for any number of equal
          resistances in parallel, the resultant current is an equal fraction of
          the total current.
        </p>

        <figure className="article-image">
          <img
            src="parallel-circuit.png"
            alt="An electrical circuit with 4 appliances in parallel."
            loading="lazy"
          />
          <figcaption>
            Figure 1: An electrical circuit with 4 appliances in parallel.
            Notice the size of the arrows depicting current flow being smaller
            in the parallel parts, signifying a smaller current.
          </figcaption>
        </figure>

        <p>
          While placing resistances in parallel allows us to isolate each
          resistance, it creates it's own problems. For one, it means you need
          to pass a large current through the entire circuit, since the circuit
          needs to support the current draw of all the appliances. This means
          that the common infrastructure needs to be able to withstand high
          currents. It also happens to be a fundamental fact of nature that
          higher electrical currents lead to higher losses when transported over
          long distances.
          <sup id="ref-3">
            <a href="#footnote-3">3</a>
          </sup>
          . This means that we cannot transport electricity with high currents
          efficiently. To solve this problem, electricity is transported at low
          currents but high voltages. This electricity is then passed onto a
          device which increases the current and reduces the voltage so the
          electricity can be used by consumers.
        </p>

        <h2>Hydrodynamic Circuits</h2>
        <p>
          This system of electrical supply might sound similar to some other
          systems that utilise fluid flow that are present in everyday
          households. Large pipes deliver water to smaller pipes that then are
          used for various purposes, before being transported back in small
          pipes to larger pipes to be treated by sewage plants. Large pipes
          deliver heating gas to smaller pipes that are then used by the
          radiators to provide heat in winters, before being transported back in
          small pipes to large pipes to the heating facility. We will be
          refering to these systems of flowing fluids are refered to as
          hydrodynamic circuits.
        </p>
        <p>
          We can easily translate our previous principles from electrical
          circuits into hydrodynamic circuits. The current through a wire is
          analagous to the flow rate of a pipe, since both are measures of how
          "fast"
          <sup id="ref-4">
            <a href="#footnote-4">4</a>
          </sup>{" "}
          particles are moving through a channel. Similarly electrical potential
          difference is analagous to the pressure of a fluid, since they are
          both measures of things that accelerate the particles. Finally we need
          an analogy for resistance. This is a bit more complicated since there
          are a couple of things that affect the resistance of a fluid. Firstly
          we have the fluid's viscosity or it's "self-resistance to movement".
          Think of how it's harder to suck a thick milkshake or honey through a
          straw than it is to suck plain water. This is because the milkshake or
          honey is more viscous than water, and hence resists moving against
          itself. Next there is the resistance offered by the walls of the pipe
          due to friction. Combining these two terms, we can get an analogy for
          resistance.
        </p>
        <figure className="article-image">
          <img
            src="hydrodynamic-circuit.png"
            alt="A simple hydrodynamic circuit converting fluid flow into useful work."
            loading="lazy"
          />
          <figcaption>
            Figure 2: A simple hydrodynamic circuit converting fluid flow into
            useful work. The "water turbine" in the middle of the path harnesses
            the pressure provided by the gravitational difference between the
            two reservoirs and converts it into useful work.
          </figcaption>
        </figure>
        <p>
          While this way of thinking might seem novel, it is actually some of
          the oldest ways of harnessing energy known to man. Medieval water
          wheels used the flow of rivers to grind wheat into flour, and
          excellent example of placing a resistance on a "wire" to get useful
          work out. Then of course there are the highly sophisticated wind-mills
          of the Belkan Federation, which harnessed the flow of the wind in the
          strong easterly currents to drain the mighty sea.
        </p>
        <h2>The Problem with Hydrodynamics</h2>
        <p>
          Hydrodynamic flows are hard to model microscopically. We generally
          model fluid flows through a series of differntial equations known as
          the Navier-Stokes equations. There are no known analytical solutions
          to these equations in their general form. We can make certain
          approximations to get analytical solutions, however these
          approximations only hold in certain simple systems. For example, a
          solution to these equations can be obtained for fluid flowing in a
          simple straight pipe. However, with even the smallest changes in
          geometry, a small change in the angle of the pipe, a simple
          contriction in the width, and the solution no longer holds
          <sup id="ref-5">
            <a href="#footnote-5">5</a>
          </sup>{" "}
          .
        </p>
        <p>
          Nevertheless by "coarse graining" our model, we can remove these
          issues. In other words, if we make our model such that we can average
          out the microscopic effects, and focus only on the macroscopic
          properties, we can make effective models for these systems. This is
          the approach we are taking when we use Ohm's law for electrical
          circuits, and it is precisely this approach that lets us model all
          sorts of other systems.
        </p>

        <h2>More Complicated Fluids</h2>
        <p>
          Thus far we have talked about simple hydrodynamic systems, however
          things are rarely so easy in practice. For example, if we were to
          model the flow of a slurry of iron ore in a pipe being transported, we
          couldn't assume a uniform density, thus our assumptions would be
          broken. This could result in unexpected behaviour, and potentially
          lead to great losses. For such scenarios, we can modify our
          coarse-grained equations by adding additional terms to account for
          these differences.
        </p>
        <p>
          These terms can be modelled as changes to the resistance. For example
          a heterogeneous mixture may increase resistance in corners, due to
          centrifugal forces. To account for this we can seperate resistances in
          the straight channels and the corners, allowing us to still use our
          model, just with an additive "corner" term. Similarly if we are to
          consider a series of rod-like particles in our fluid, we can model
          that as an additive "nematic" term. By doing so we still preserve the
          basic behaviour we expect but also model the complexities of our
          fluid. Note that for none of these do we actually need to know the
          microscopic interactions, just how those interactions create
          macroscopic changes.
        </p>

        <h2>Future Outlook</h2>
        <p>
          In the future, we can use these techniques to model other systems.
          While we have talked about a hydrodynamic analogy here, a similar
          analogy exists for mechanical systems which neatly collapses into
          Newton's laws under most conditions. We can also use the hydrodynamic
          analogy to build better systems such as more efficient pipelines to
          transport substances, or better models to harness wind and wave
          energy.
        </p>
        <p>
          Current research is also focused on modelling biological substances
          through these principles, to provide a better understanding of how
          bacterial colonies grow inside complex networks such as the human
          circulatory and lymphatic systems. Additionally, some researchers are
          attempting to use these models to create nanomachines that can be used
          for targetted medical therapies and even for minor surgical
          operations.
        </p>
        <p>
          Overall, this macroscopic coarse grained approach allows us to make
          useful scientific models to progress human civilisation without having
          to do expensive computations. While microscopic effects are still
          important and understanding them is critical to gaining an
          understanding of these systems, the coarse-grained approach allows us
          to (at least for the time being) get a "good-enough" solution that is
          more useful for practical purposes.
        </p>
      </div>

      <footer className="article-footnotes">
        <h3>Footnotes</h3>
        <ol>
          <li id="footnote-1">
            While this is not entirely accurate since the electricity in most
            homes has alternating current, which means that while Ohm's law is
            technically true, the values for current and voltage are constantly
            changing. Regardless most appliances account for this either by
            converting the incoming alternating current to direct current or by
            accounting for these fluctuations in their design, so the point
            still stands.
            <a href="#ref-1">↑</a>
          </li>
          <li id="footnote-2">
            Thankfully, sharp increases in current are easy to detect, and we
            can design various devices like fuses or magnetic circuit breakers
            to cut off the electrical supply before disaster.
            <a href="#ref-2">↑</a>
          </li>
          <li id="footnote-3">
            This is due to the fact that the heating effect of elecricity is
            directly proportional to the square of the current passing through a
            heating element (or wire as it would be in this case). Keen readers
            might want to look up "Joule's law of heating" at their local Royal
            Library or branch of the Royal Institute for the Arts and Sciences.
            <a href="#ref-3">↑</a>
          </li>
          <li id="footnote-4">
            Admittedly this is a somewhat bad way to phrase this. The
            measurement of how fast electrons move through a wire is called the
            drift velocity of the circuit and is measured in the same units as
            velocity. However, the current is a measure of the flow of charged
            particles, and hence analagous to the flow rate. On a similar note,
            the flow rate of any fluid doesn't measure the instantaneous
            velocity of the particles in the fluid.
            <a href="#ref-4">↑</a>
          </li>
          <li id="footnote-5">
            It should be noted that modelling electrical flows is also similarly
            hard, albeit to a much lesser extent. Electrical flows are modelled
            using a series of differential equations called Maxwell's equations.
            While we know analytical solutions to these equations, they are
            nevertheless hard to solve for under certain circumstances.
            <a href="#ref-5">↑</a>
          </li>
        </ol>
      </footer>
    </article>
  );
}
