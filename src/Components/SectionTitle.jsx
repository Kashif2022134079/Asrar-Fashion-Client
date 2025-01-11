
const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="text-center my-4">
            <h3 className="text-3xl font-light">----{subheading}----</h3>
            <h3 className="text-3xl font-semibold uppercase">{heading}</h3>
            <div className="divider my-2"></div>
        </div>
    );
};

export default SectionTitle;