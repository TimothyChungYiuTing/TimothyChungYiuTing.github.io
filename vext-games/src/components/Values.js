import {
  ArrowPathIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ScaleIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Versatility",
    description:
      "Exploring games throughout different genres, creating an environment for everyone!",
    icon: ArrowPathIcon,
  },
  {
    name: "Evolutionary",
    description:
      "An ever changing environment as the seasons come and go to make sure we're prepared to build only the best.",
    icon: LightBulbIcon,
  },
  {
    name: "Xtraodinary",
    description: "Creating games that will leave an ever-lasting impression!",
    icon: ShieldCheckIcon,
  },
  {
    name: "Tenacity",
    description:
      "Overcoming any obstacles to create the best experience for our players.",
    icon: ScaleIcon,
  },
];

const Values = () => {
  return (
    // <div className="mx-20 my-10 border-8 border-solid border-indigo-600 rounded-md custom-neon-border">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-200">
              Explore the culture
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-400 sm:text-4xl">
              Our Values
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              We believe our studio’s core values—Versatility, Evolutionary,
              Xtraordinary, and Tenacity—set us apart. We are committed to
              adapting to market changes, driving innovation, and creating
              unique games that stand out.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-indigo-200">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    // {/* </div> */}
  );
};

export default Values;
