import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default ({ width = 26, height = 16 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5832 9.61782V10.256H10.8596H12.1361V10.5751V10.8943H11.1787H10.2214V11.2134V11.483H9.90477H9.57824V11.8095V12.1361H9.90477H10.2313V11.8095V11.5325H10.5405H10.8596V12.1707V12.8089H10.5405H10.2214V13.128V13.4471H10.5405H10.8596V13.7662V14.0853H9.90231H8.94498V13.7662V13.4471H9.26409H9.5832V12.8089V12.1707H9.26409H8.94498V12.4898V12.8089H8.30676H7.66854V12.1707V11.5325H7.98765H8.30676V10.8943V10.256H8.62587H8.92519V10.5578V10.8844H9.25172H9.57825V10.5578V10.2313H9.25172H8.94498V9.61782V8.9796H9.26409H9.5832V9.61782ZM8.94498 10.2313H8.92519V10.256H8.94498V10.2313ZM6.39211 10.8943V10.5751V10.256H6.71122H7.03032V9.93693V9.61782H7.66854H8.30676V9.93693V10.256H7.98765H7.66854V10.5751V10.8943H7.03032H6.39211ZM6.39211 11.483V11.2134V10.8943H6.073H5.75389V11.2134V11.5325H5.43478H5.11567V12.8089V14.0853H5.43478H5.75389V14.7236V15.3618H5.43478H5.11567V15.6809V16H5.43478H5.75389V15.6809V15.3618H6.39211H7.03032V14.7236V14.0853H7.34943H7.66854V14.4045V14.7236H7.98765H8.30676V14.0853V13.4471H7.03032H5.75389V13.128V12.8089H6.39211H7.03032V12.1707V11.5325H6.71122H6.42179V11.483H6.39211ZM6.39211 11.483H6.09526H5.76873V11.8095V12.1361H6.09526H6.42179V11.8095V11.5325H6.39211V11.483ZM10.2313 11.5325V11.483H10.2214V11.5325H10.2313ZM10.8843 1.60066V3.2013H10.5642H10.2441V3.52143V3.84155H10.5642H10.8843V5.44219V7.04283H10.2441H9.60383V6.7227V6.42179H9.91158H10.2313V5.13986V3.85793H9.91158H9.59185V3.53745V3.21696H9.91158H10.2313V2.89648V2.576H9.27212H8.31294V2.25551V1.93503H9.27212H10.2313V1.29406V0.653096H9.59185H8.95239V0.973579V1.29406H8.63267H8.31294V1.61455V1.93503H7.99321H7.67348V2.25551V2.576H7.99321H8.31294V2.89648V3.21696H7.03403H5.75512V3.85793V4.49889H6.07485H6.39458V4.81938V5.13986H6.07485H5.75512V5.46034V5.78083H5.43539H5.11567V6.10131V6.42179H5.43539H5.75512V6.10131V5.78083H6.39458H7.03403V5.13986V4.49889H6.7143H6.39458V4.17841V3.85793H7.03403H7.67348V4.17841V4.49889H7.99321H8.31294V4.81938V5.13986H8.63267H8.95239V5.46034V5.78083H9.27212H9.59185V6.10131V6.40257H9.2837H8.96357V6.7227V7.04283H8.32332H7.68306V6.7227V6.40257H8.00319H8.32332V6.08245V5.76232H7.68306H7.04281V6.08245V6.40257H6.72268H6.40255V6.7227V7.04283H6.08243H5.7623V7.36296V7.68308H5.44217H5.12204V8.00321V8.32334H4.48179H3.84153V8.64347V8.96359H3.52141H3.20128V9.28372V9.60385H2.56102H1.92077V9.28372V8.96359H2.2409H2.56102V8.32334V7.6844H2.86807H3.18915V8.00549V8.32658H3.51024H3.83133V8.00549V7.6844H4.47351H5.11568V7.36331V7.04223H4.79459H4.47351V6.72114V6.40005H4.15242H3.83133V6.07896V5.75788H3.18915H2.54698V5.43679V5.1157H2.22589H1.9048V5.43679V5.75788H2.22589H2.54698V6.07896V6.40005H2.86807H3.18915V6.72114V7.04223H2.86807H2.54698V7.36331V7.68308H2.2409H1.92077V6.7227V5.76232H1.60064H1.28051V5.12206V4.48181H0.640259H3.8147e-06V3.84155V3.2013H0.640259H1.28051V2.88117V2.56104H0.640259H3.8147e-06V1.28053V2.38419e-05H1.92077H3.84153V0.960406V1.92079H4.16166H4.48179V2.24092V2.56104H4.80192H5.12204V2.24092V1.92079H5.44217H5.7623V2.24092V2.56104H6.40255H7.04281V2.24092V1.92079H6.72268H6.40255V0.960406V2.38419e-05H7.04281H7.68306V0.320151V0.640279H8.32332H8.96357V0.320151V2.38419e-05H9.92396H10.8843V1.60066ZM1.92077 7.68308V8.00321V8.32334H1.28051H0.640259V8.64347V8.96359H0.960386H1.28051V9.92398V10.8844H0.960386H0.640259V10.2441V9.60385H0.320131H3.8147e-06V8.64347V7.68308H0.320131H0.640259V7.36296V7.04283H0.320131H3.8147e-06V6.40257V5.76232H0.320131H0.640259V6.08245V6.40257H0.960386H1.28051V7.04283V7.68308H1.60064H1.92077ZM2.54698 7.68308H2.56102V7.6844H2.54698V7.68308ZM9.59185 6.40257H9.60383V6.42179H9.59185V6.40257ZM16 2.23128V4.46257H13.7687H11.5374V2.23128V-1.14441e-05H13.7687H16V2.23128ZM12.1361 2.25857V3.86401H13.7415H15.3469V2.25857V0.653134H13.7415H12.1361V2.25857ZM14.6939 3.21094V2.25856V1.30618H13.7415H12.7891V2.25856V3.21094H13.7415H14.6939ZM8.97959 3.53748V3.86401H8.65306H8.32653V3.53748V3.21095H8.65306H8.97959V3.53748ZM7.02042 1.30615V0.979622V0.653092H7.34695H7.67348V0.979622V1.30615H7.34695H7.02042ZM0.653093 1.92294H0.974181H1.29527V1.60548V1.28802H1.61636H1.93745V1.92294V2.55786H2.25853H2.57962V2.2404V1.92294H2.90071H3.2218V2.2404V2.55786H3.54288H3.86397V2.2404V1.92294H3.54288H3.2218V1.60548V1.28802H2.57962H1.93745V0.970562V0.653103H1.29527H0.653093V1.28802V1.92294ZM3.21092 5.11564V4.16326V3.21088H4.1633H5.11568V4.16326V5.11564H4.1633H3.21092ZM4.46261 4.13603V4.46257H4.13608H3.80955V4.13603V3.80951H4.13608H4.46261V4.13603ZM1.25173 3.86401V3.53748V3.21095H1.57825H1.90479V3.53748V3.86401H1.57825H1.25173ZM3.86397 7.6735V7.34697V7.02044H3.53744H3.21091V7.34697V7.6735H3.53744H3.86397ZM5.76874 0.979622V1.30615H5.11568H4.46262V0.979622V0.653092H5.11568H5.76874V0.979622ZM16 7.67953V6.39759V5.11566H15.6809H15.3618V6.39759V7.67953H15.0427H14.7236V7.35904V7.03856H14.4045H14.0853V7.35904V7.67953H13.7662H13.4471V7.35904V7.03856H12.8089H12.1707V6.71808V6.39759H12.8089H13.4471V6.07711V5.75663H12.8089H12.1707V5.43614V5.11566H11.8516H11.5325V5.43614V5.75663H11.8516H12.1707V6.07711V6.39759H11.8516H11.5325V6.71808V7.03856H11.8516H12.1707V7.35904V7.67953H11.8516H11.5325V8.00001V8.32049H11.8516H12.1707V8.64098V8.96146H11.5325H10.8943V8.32049V7.67953H9.93693H8.9796V8.00001V8.32049H9.61782H10.256V8.96146V9.60243H11.8516H13.4471V9.28194V8.96146H13.7662H14.0853V8.64098V8.32049H14.4045H14.7236V8.96146V9.60243H15.0427H15.3618V9.92291V10.2434H14.0853H12.8089V10.5639V10.8844H14.4045H16V9.92291V8.96146H15.6809H15.3618V8.32049V7.67953H15.6809H16ZM14.6939 5.44219V5.76872H14.3674H14.0408V5.44219V5.11566H14.3674H14.6939V5.44219ZM8.32654 8.95783V8.31566V7.67348H7.36055H6.39457V8.31566V8.95783H5.42858H4.4626V9.27892V9.60001H4.78459H5.10659V9.9211V10.2422H4.78459H4.4626V10.5633V10.8844H4.78459H5.10659V10.5633V10.2422H5.42858H5.75058V9.9211V9.60001H6.07257H6.39457V9.27892V8.95783H6.71656H7.03856V8.63674V8.31566H7.36055H7.68255V8.63674V8.95783H8.00454H8.32654ZM8.32653 12.1361V11.8095V11.483H8.65306H8.97959V11.8095V12.1361H8.65306H8.32653ZM3.86397 10.8844V10.5578V10.2313H3.53744H3.21091V10.5578V10.8844H3.53744H3.86397ZM2.55784 10.5578V10.8844H2.23131H1.90478V10.5578V10.2313H2.23131H2.55784V10.5578ZM16 16V13.7687V11.5374H13.7687H11.5374V13.7687V16H13.7687H16ZM12.1361 13.7415V15.3469H13.7415H15.3469V13.7415V12.136H13.7415H12.1361V13.7415ZM14.6939 14.6938V13.7415V12.7891H13.7415H12.7891V13.7415V14.6938H13.7415H14.6939ZM4.46261 13.7687V16H2.23132H2.76566e-05V13.7687V11.5374H2.23132H4.46261V13.7687ZM0.653093 15.3469V13.7415V12.136H2.25853H3.86397V13.7415V15.3469H2.25853H0.653093ZM3.2109 13.7415V14.6938H2.25852H1.30614V13.7415V12.7891H2.25852H3.2109V13.7415ZM10.8844 15.3469V15.0204V14.6939H10.5578H10.2313V15.0204V15.3469H10.5578H10.8844ZM9.57823 15.3469V16H9.2517H8.92517V15.3469V14.6939H9.2517H9.57823V15.3469ZM8.32654 16V15.6735V15.3469H8.00001H7.67348V15.6735V16H8.00001H8.32654Z"
        fill="white"
      />
    </Svg>
  );
};
