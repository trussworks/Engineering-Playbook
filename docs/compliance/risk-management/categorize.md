# Risk Management Framework - Step 1: Categorize

Categorization is based on an impact analysis and is performed to determine the types of information included within the authorization boundary, security requirements for the information type, and potential impact resulting from a security compromise. Agencies are required to categorize their information systems as low-impact, moderate-impact, or high-impact for the security objectives of confidentiality, integrity, and availability and to select appropriate security controls.

## Objectives

Information systems have three security objectives defined by the Federal Information Security Management Act (FISMA).

- **Confidentiality:** Prevent unauthorized disclosure of information.
- **Integrity:** Prevent unauthorized modification or destruction of information.
- **Availability:** Prevent disruption of access to information or use of the system.

## Categorizing

To categorize the information system, you need to establish two things. First, what are the data types in the system? Second, for each of those data types, would the failure of each of the three security objectives pose a low, moderate, or high risk to the agency? Decide how damaging the loss of confidentiality, integrity, or availability would be to both the agency’s ability to work and its money, property, or people.

### Risks and risk categories

| Area of risk               | Low risk             | Moderate risk                                              | High risk                                  |
| -------------------------- | -------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| Ability to work            | Minor but noticeable | Significant but does not affect agency’s primary functions | Harms ability to perform primary functions |
| Money, property, or people | Minor                | Significant                                                | Catastrophic                               |

## Expressing the results

For each information type, state the risk for confidentiality, integrity, and availability. Structure it in this way:

`SC information type = {(confidentiality, impact), (integrity, impact), (availability, impact)}`

Use `low`, `medium`, or `high` for the impact. Then take the maximum impact category against each objective and use that for the information system as a whole. Structure it the same way:

`SC information system = {(confidentiality, impact), (integrity, impact), (availability, impact)}`

An individual data type’s impact can be _n/a_ if there is no risk at all, but for the whole system, the minimum risk level on any objective is Low.

## Categorization under continuous monitoring

You should begin categorizing information systems as close to the beginning of the system development life cycle as possible. Each time you identify an information type the system will handle, give it an initial categorization. As you assemble a larger set of them, review the initial categories and update if needed. You might find that relationships among categories raise the risk of one or more of them. You might find that the use of the system is going to change, which could change the risks. The full set of information types will produce system categories that are unsurprising. You are more likely to be prepared to select, implement, assess, and document the correct controls.

Building knowledge of risk as you build the system is best done by having the developers participate. As they identify system risks, they can think about good controls rather than reacting after the fact to categorization received from information security. And the flexibility this builds into the development life cycle will make it much easier to react to issues raised by continuous monitoring.

## More detailed reading from NIST

- [FIPS 199](http://csrc.nist.gov/publications/fips/fips199/FIPS-PUB-199-final.pdf) describes the objectives, categories, and how to structure your categories.
- [SP 800-60](http://csrc.nist.gov/publications/nistpubs/800-60-rev1/SP800-60_Vol1-Rev1.pdf) recommends an specific approach to categorization.
