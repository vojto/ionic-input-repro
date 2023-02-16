import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  setupIonicReact,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
} from '@ionic/react';
import { cog, flash, list } from 'ionicons/icons';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import Lists from './pages/Lists';
import ListDetail from './pages/ListDetail';
import Settings from './pages/Settings';
import Tabs from './pages/Tabs';

setupIonicReact({});

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell = () => {
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Reflect Mobile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent forceOverscroll={false}>
          <div className="space-y-8 p-8">
            <div className="bg-gray-200 p-8">spacer</div>
            <div className="bg-gray-200 p-8">spacer</div>
            <div className="bg-gray-200 p-8">spacer</div>
            <div className="bg-gray-200 p-8">spacer</div>
            <div className="bg-gray-100 p-8">
              <IonInput className="w-full text-red-500" value="Hello world!" />
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default AppShell;
